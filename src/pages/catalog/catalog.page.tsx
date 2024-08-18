import { useEffect } from "react";
import { Header, MemoizedCard } from "./components";

import styles from "./styles.module.scss";
import { Loader } from "common";
import { useAppDispatch, useAppSelector } from "store/store.interface";
import { getCategoryByIdReducer } from "store/slices";

export const CatalogPage = () => {
  const { isLoading, products } = useAppSelector((state) => state.category);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategoryByIdReducer({ id: 1 }));
    //в зависимости передать id нужной категории
  }, []);

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.cards}>
        {products.map((pr) => (
          <MemoizedCard product={pr} key={pr.id} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
