import { FC, useContext } from 'react';
import classes from './index.module.css';
import Card from '../../components/Card';
import AssetsContext from '../../store/assetsContext';

const WatchList: FC = () => {
  const assetsCtx = useContext(AssetsContext);

  return (
    <>
      <h1 className={classes.PageTitle}>WatchList</h1>
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
