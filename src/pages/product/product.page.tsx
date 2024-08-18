import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "store/store.interface";
import { getProductByIdReducer } from "store/slices";
import {
  ProductActions,
  ProductDate,
  ProductHeader,
  ProductInfo,
  Slider,
} from "./components";

import styles from "./styles.module.scss";
import { Loader } from "common";
import { useParams } from "react-router-dom";

export const ProductPage = () => {
  const params = useParams<{ id: string }>();

  const dispatch = useAppDispatch();
  const { isLoading, product } = useAppSelector((state) => state.product);

  useEffect(() => {
    const id = Number(params.id);
    if (!id) return;

    dispatch(getProductByIdReducer({ id }));
  }, [params.id]);

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <Loader />
      </div>
    );
  }

  if (!product) return <div>Какой-нибудь красивый Not Found</div>;

  return (
    <div className={styles.container}>
      <ProductHeader categoryName={product.category.name} />
      <Slider imgs={product.imgs} />
      <ProductInfo
        name={product.data.name}
        delivery={product.data.delivery}
        price={product.data.price}
        sellerRating={product.seller.rating}
      />
      <ProductActions isFavorite={product.data.isFavorite} />
      <span className={styles.border} />
      <pre>{product.data.description}</pre>
      <ProductDate date={product.data.date} />
    </div>
  );
};

export default ProductPage;
