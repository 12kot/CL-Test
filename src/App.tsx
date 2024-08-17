import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout";
import { lazy } from "react";

const LoginPage = lazy(() => import("./pages/catalog/catalog.page"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/catalog" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
