import { createContext, FC, useState, ReactNode, useMemo } from 'react';
import { AssetType } from '../utils/assets';

const initValue = {
  followingList: [] as AssetType[],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  toggleFollowing: (item: AssetType) => {},
};

const AssetsContext = createContext(initValue);

type Props = {
  children?: ReactNode;
};

export const AssetsContextProvider: FC<Props> = ({ children }) => {
  const [followingList, setFollowingList] = useState<AssetType[]>([]);

  // 若已在追蹤列表則移除，反之則寫入
  const toggleFollowing = (data: AssetType) => {
    setFollowingList((preList) => {
      if (preList.find((item) => item.id === data.id)) {
        return preList.filter((item) => item.id !== data.id);
      }
      return [...preList, data];
    });
  };

  const contextValue = useMemo(
    () => ({
      followingList,
      toggleFollowing,
    }),
    [followingList],
  );

  return (
    <AssetsContext.Provider value={contextValue}>
      {children}
    </AssetsContext.Provider>
  );
};

export default AssetsContext;
