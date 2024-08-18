import { LikeSvg } from "assets";
import { ICategoryProduct } from "api";

import styles from "./styles.module.scss";
import { memo } from "react";

interface IProps {
  product: ICategoryProduct;
}

export const Card = ({ product }: IProps) => {
  return (
    <div className={styles.container}>
      <button className={`${styles.like} ${product.isFavorite && styles.active}`}>
        <LikeSvg />
      </button>
      <img
        src={product.imgUrl}
        alt={product.imgAlt}
        loading="lazy"
      ></img>
      <div className={styles.data}>
        <p>
          <b>{product.name}</b>
        </p>
        <p className={styles.city}>{product.city}</p>
        <p>
          <b>{product.price}</b>
        </p>
      </div>
    </div>
  );
};


export const MemoizedCard = memo(Card);
