import { LikeSvg } from "assets";
import { ICategoryProduct } from "api";

import styles from "./styles.module.scss";
import { memo } from "react";
import { NavLink } from "react-router-dom";

interface IProps {
  product: ICategoryProduct;
}

export const Card = ({ product }: IProps) => {
  return (
    <NavLink to={`/product/${product.id}`} className={styles.container} unstable_viewTransition>
      <button
        className={`${styles.like} ${product.isFavorite && styles.active}`}
      >
        <LikeSvg />
      </button>
      <img src={product.imgUrl} alt={product.imgAlt} loading="lazy" />
      <div className={styles.data}>
        <p>
          <b>{product.name}</b>
        </p>
        <p className={styles.city}>{product.city}</p>
        <p>
          <b>{product.price}</b>
        </p>
      </div>
    </NavLink>
  );
};

export const MemoizedCard = memo(Card);
