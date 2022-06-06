import { FC, useEffect, useState, ChangeEvent, useContext } from 'react';
import Pagination from '@mui/material/Pagination';
import classes from './index.module.css';
import Card from '../../components/Card';
import useAxios from '../../hooks/useAxios';
import { formatAssetList, AssetType } from '../../utils/assets';
import { AssetObject } from '../../types/assets';
import Loading from '../../components/Loading';
import AssetsContext from '../../store/assetsContext';

interface AssetAPIResponse {
  assets: AssetObject[];
  next: string | null;
  previous: string | null;
}

const AssetList: FC = () => {
  const { sendRequest: getAssets, isLoading } = useAxios<AssetAPIResponse>({
    url: '/assets',
  });
  const [assetList, setAssetList] = useState<AssetType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const assetsCtx = useContext(AssetsContext);

  const isFollowing = (id: number) =>
    !!assetsCtx.followingList.find((item) => item.id === id);

  const fetchList = async (page = 1) => {
    const res = await getAssets({
      params: {
        order_direction: 'desc',
        order_by: 'sale_count',
        offset: (20 * (page - 1)).toString(),
        limit: '20',
      },
    });
    setAssetList(formatAssetList(res?.assets || []));
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchList();
  }, []);

  const pageChangeHandler = (e: ChangeEvent<unknown>, value: number) => {
    fetchList(value);
  };
  console.log('AssetList rendered');

  return (
    <>
      <h1 className={classes.PageTitle}>NFTs</h1>
      <div className={classes.ListWrapper}>
        {assetList.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            address={item.address}
            sales={item.sales}
            img={item.img}
            following={isFollowing(item.id)}
            last={item.last_sold}
          />
        ))}
      </div>
      {!isLoading && (
        <Pagination
          count={10}
          className={classes.PagiWrapper}
          page={currentPage}
          onChange={pageChangeHandler}
        />
      )}
      <Loading open={isLoading} />
    </>
  );
};

export default AssetList;
