import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AssetList from "./pages/AssetList";

const WatchList = lazy(() => import("./pages/WatchList"));

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<p>loading</p>}>
        <Routes>
          <Route path="/" element={<AssetList />} />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
