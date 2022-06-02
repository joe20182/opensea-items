import { AssetObject } from '../types/assets';

export interface AssetType {
  id: number;
  name: string;
  address: string;
  sales: number;
  last_sold: string;
  img: string;
}

export const formatAssetList = (assets: AssetObject[]) =>
  assets.map((asset) => ({
    id: asset.id,
    // name: `${asset.collection.name}${asset.name}`,
    name: asset.name || '-',
    address: asset.asset_contract.address,
    sales: asset.num_sales,
    last_sold: asset?.last_sale?.payment_token?.usd_price,
    img: asset.image_url,
  }));
