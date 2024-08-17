import { ReactElement, Suspense } from "react";

import { Outlet } from "react-router-dom";

import styles from "./main.module.scss";
import { Loader, Footer } from "../common";

export const MainLayout = (): ReactElement => {
  return (
    <>
      <Suspense
        fallback={
          <div className={styles.loader}>
            <Loader />
          </div>
        }
      >
        <main className={styles.container}>
          <Outlet />
        </main>
      </Suspense>

      <Footer />
    </>
  );
};
