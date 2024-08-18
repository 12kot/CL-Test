import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout";
import { lazy } from "react";

const CatalogPage = lazy(() => import("./pages/catalog/catalog.page"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/catalog" element={<CatalogPage />} />
      </Route>
    </Routes>
  );
}

export default App;
