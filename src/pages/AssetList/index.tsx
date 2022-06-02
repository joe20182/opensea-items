import { FC, useEffect, useState } from 'react';
import classes from './index.module.css';
import Card from '../../components/Card';
import useAxios from '../../hooks/useAxios';
import { formatAssetList, AssetType } from '../../utils/assets';
import { AssetObject } from '../../types/assets';

interface AssetAPIResponse {
  assets: AssetObject[];
  next: string | null;
  previous: string | null;
}

const AssetList: FC = () => {
  const { sendRequest: getAssets } = useAxios<AssetAPIResponse>({
    url: '/assets',
  });
  const [assetList, setAssetList] = useState<AssetType[]>([]);

  const fetchList = async () => {
    const res = await getAssets({
      params: {
        order_direction: 'asc',
      },
    });
    setAssetList(formatAssetList(res?.assets || []));
  };

  useEffect(() => {
    fetchList();
  }, []);

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
    </>
  );
};

export default AssetList;
