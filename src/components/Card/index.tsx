import { FC, useContext } from 'react';
import classes from './index.module.css';
import AssetsContext from '../../store/assetsContext';

interface CardProps {
  id: number;
  name: string;
  address: string;
  sales: number;
  last?: number;
  img: string;
  following?: boolean;
  showLastSold?: boolean;
}

const Card: FC<CardProps> = ({
  id,
  name,
  address,
  sales,
  last,
  img,
  following,
  showLastSold,
}) => {
  const assetsCtx = useContext(AssetsContext);

  // add / remove watchlist
  const watchHandler = () => {
    assetsCtx.toggleFollowing({
      id,
      name,
      address,
      sales,
      last_sold: last,
      img,
    });
  };

  return (
    <div className={classes.CardWrapper}>
      <div className={classes.CardItem}>
        <img src={img} alt="asset-img" />
        <div className={classes.DetailSection}>
          <div className={classes.NameArea}>
            <div className={classes.Address}>{address}</div>
            <div className="name">{name}</div>
          </div>
          <div className={classes.PriceArea}>
            <div className="sales">sales {sales}</div>
            {showLastSold && typeof last !== 'undefined' && (
              <div className="last">last {last.toFixed(2)}</div>
            )}
          </div>
        </div>
        <button
          type="button"
          className={following ? classes.AddedButton : classes.ActButton}
          onClick={watchHandler}
        >
          {following ? 'Remove from Watchlist' : 'Add to Watchlist'}
        </button>
      </div>
    </div>
  );
};

export default Card;
