import { lazy, Suspense, FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AssetList from './pages/AssetList';

const WatchList = lazy(() => import('./pages/WatchList'));

const App: FC = () => {
  const Loading = <p>loading</p>;
  return (
    <div className="App">
      <Header />
      <Suspense fallback={Loading}>
        <Routes>
          <Route path="/" element={<AssetList />} />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
