import { createContext, FC, useState, ReactNode, useMemo } from 'react';
import { useSnackbar } from 'notistack';
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
  const { enqueueSnackbar } = useSnackbar();

  // 若已在追蹤列表則移除，反之則寫入
  const toggleFollowing = (data: AssetType) => {
    setFollowingList((preList) => {
      if (preList.find((item) => item.id === data.id)) {
        enqueueSnackbar('Removed from watchlist', {
          variant: 'warning',
        });
        return preList.filter((item) => item.id !== data.id);
      }
      enqueueSnackbar('Added to watchlist', {
        variant: 'success',
      });
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
