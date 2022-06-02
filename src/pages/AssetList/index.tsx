import { FC } from 'react';
import classes from './index.module.css';
import Card from '../../components/Card';

const list = [
  {
    id: 1,
    name: 'QOO#1',
    address: '0xqwe....dw45',
    sales: 2,
    last_sold: 789.56,
  },
  {
    id: 2,
    name: 'QOO#2',
    address: '0xqwe....dw45',
    sales: 2,
    last_sold: 789.56,
  },
  {
    id: 3,
    name: 'QOO#3',
    address: '0xqwe....dw45',
    sales: 3,
    last_sold: 789.56,
  },
  {
    id: 4,
    name: 'QOO#4',
    address: '0xqwe....dw45',
    sales: 4,
    last_sold: 789.56,
  },
  {
    id: 5,
    name: 'QOO#5',
    address: '0xqwe....dw45',
    sales: 1,
    last_sold: 789.56,
  },
];

const AssetList: FC = () => {
  const q = '123';
  return (
    <>
      <h1 className={classes.PageTitle}>NFTs</h1>
      <div>list {q}</div>
      <div className={classes.ListWrapper}>
        {list.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            address={item.address}
            sales={item.sales}
          />
        ))}
      </div>
    </>
  );
};

export default AssetList;
