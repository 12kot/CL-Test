import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout";
import { lazy } from "react";

const CatalogPage = lazy(() => import("./pages/catalog/catalog.page"));
const ProductPage = lazy(() => import("./pages/product/product.page"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Route>
    </Routes>
  );
}

export default App;
