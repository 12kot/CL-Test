import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { MainLayout } from "./layout";
import { lazy } from "react";

const CatalogPage = lazy(() => import("./pages/catalog/catalog.page"));
const ProductPage = lazy(() => import("./pages/product/product.page"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "catalog", element: <CatalogPage /> },
      { path: "product/:id", element: <ProductPage /> },
    ],
  },
  { path: "*", element: <p>Красивый Not Found</p> },
]);

function App() {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
}

export default App;
