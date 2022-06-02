import { FC } from 'react';
import classes from './index.module.css';

const AssetList: FC = () => {
  const q = '123';
  return (
    <>
      <h1 className={classes.PageTitle}>NFTs</h1>
      <div>list {q}</div>
    </>
  );
};

export default AssetList;
