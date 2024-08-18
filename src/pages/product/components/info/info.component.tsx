import { LocationSvg, RatingSvg } from "assets";
import styles from "./styles.module.scss";

export const ProductInfo = () => {
  return (
    <section className={styles.container}>
      <h2>Шампиньоны свежие. Урожай 2023</h2>
      <div className={styles.address}>
        <LocationSvg />
        <p>Доставка в Тамбов, Тамбовская обл., Россия</p>
      </div>
      <div className={styles.price}>
        <p>Цена</p>
        <p>
          <b>от 93.50 р/кг</b>
        </p>
      </div>
      <div className={styles.rating}>
        <RatingSvg />
        <p>
          <span>Продавец: </span>5.0
        </p>
      </div>
    </section>
  );
};
