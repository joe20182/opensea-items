import { AssetObject } from '../types/assets';

export interface AssetType {
  id: number;
  name: string;
  address: string;
  sales: number;
  last_sold?: string;
  img: string;
}

// 用last sold ETH乘以usdt price計算價格
const getUsdtValue = (item: AssetObject) => {
  if (item?.last_sale?.payment_token?.usd_price) {
    return (
      +item.last_sale.total_price *
      10 ** -18 *
      +item.last_sale.payment_token.usd_price
    ).toFixed(2);
  }
  return '-';
};

export const formatAssetList = (assets: AssetObject[]) =>
  assets.map((asset) => ({
    id: asset.id,
    name: asset.name || '-',
    address: `${asset.asset_contract.address.substr(
      0,
      5,
    )}...${asset.asset_contract.address.substr(-4)}`,
    sales: asset.num_sales,
    last_sold: getUsdtValue(asset),
    img: asset.image_url,
  }));
