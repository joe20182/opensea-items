import { FC, useContext } from 'react';
import classes from './index.module.css';
import Card from '../../components/Card';
import AssetsContext from '../../store/assetsContext';

const WatchList: FC = () => {
  const assetsCtx = useContext(AssetsContext);

  const totalWatchedValues = () => {
    let sum = 0;
    assetsCtx.followingList.forEach((item) => {
      sum += item.last_sold || 0;
    });
    return sum.toFixed(2);
  };

  return (
    <>
      <h1 className={classes.PageTitle}>WatchList</h1>
      <div className={classes.SumWrapper}>
        <h4>Total watched values: </h4>
        <span>$ {totalWatchedValues()} (USD)</span>
      </div>
      <div className={classes.ListWrapper}>
        {assetsCtx.followingList.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            address={item.address}
            sales={item.sales}
            img={item.img}
            last={item.last_sold}
            following
            showLastSold
          />
        ))}
      </div>
    </>
  );
};

export default WatchList;
