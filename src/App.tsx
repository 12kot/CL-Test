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
        <Route path="/product/:id" element={<ProductPage />} />
      </Route>
      <Route path="/*" element={<p>Красивый Not Found</p>} />
    </Routes>
  );
}

export default App;
