import { FC } from 'react';
import classes from './index.module.css';

interface CardProps {
  name: string;
  address: string;
  sales: number;
  last?: string;
}

const Card: FC<CardProps> = ({ name, address, sales, last }) => {
  const watchHandler = () => console.log(111);

  return (
    <div className={classes.CardWrapper}>
      <div className={classes.CardItem}>
        <img
          src="https://lh3.googleusercontent.com/eNG1VFmuf3ha5IAtZWHMaQcdViEhR2pE4pI77zAUJ2yXV3S44ltfmLRrbdxJTWttdYBJrFW_38YRyJsl7gQYk2OsqF244kET7KDaFw=w600"
          alt="asset-img"
        />
        <div className={classes.DetailSection}>
          <div className={classes.NameArea}>
            <div className={classes.Address}>{address}</div>
            <div className="name">{name}</div>
          </div>
          <div className={classes.PriceArea}>
            <div className="sales">sales {sales}</div>
            {last && <div className="last">last {last}</div>}
          </div>
        </div>
        <button
          type="button"
          className={classes.ActButton}
          onClick={watchHandler}
        >
          Add to Watchlist
        </button>
      </div>
    </div>
  );
};

export default Card;
