import { FC, useEffect, useState, ChangeEvent } from 'react';
import Pagination from '@mui/material/Pagination';
import classes from './index.module.css';
import Card from '../../components/Card';
import useAxios from '../../hooks/useAxios';
import { formatAssetList, AssetType } from '../../utils/assets';
import { AssetObject } from '../../types/assets';
import Loading from '../../components/Loading';

interface AssetAPIResponse {
  assets: AssetObject[];
  next: string | null;
  previous: string | null;
}

/**
 * opensea API不是用分頁而是cursor，用此array紀錄已知每頁的cursor
 */
const pageCursors: Array<string | null | undefined> = [null];

const AssetList: FC = () => {
  const { sendRequest: getAssets, isLoading } = useAxios<AssetAPIResponse>({
    url: '/assets',
  });
  const [assetList, setAssetList] = useState<AssetType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchList = async (page = 1) => {
    const res = await getAssets({
      params: {
        order_direction: 'desc',
        order_by: 'sale_count',
        offset: (20 * (page - 1)).toString(),
        limit: '20',
        // collection_slug: 'gene-sis-the-girls-of-armament',
      },
    });
    setAssetList(formatAssetList(res?.assets || []));
    pageCursors[currentPage] = res?.next;
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchList();
  }, []);

  const pageChangeHandler = (e: ChangeEvent<unknown>, value: number) => {
    fetchList(value);
  };

  return (
    <>
      <h1 className={classes.PageTitle}>NFTs</h1>
      <div className={classes.ListWrapper}>
        {assetList.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            address={item.address}
            sales={item.sales}
            img={item.img}
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
