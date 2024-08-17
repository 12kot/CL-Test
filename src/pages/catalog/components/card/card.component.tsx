import styles from "./styles.module.scss";

export const Card = () => {
  return (
    <div className={styles.container}>
      <img
        src="https://storage.in-news.ru/uploads/images/n3Tq7K6nFnx1Rb8I7KWA_widened_652.jpeg"
        alt="Грибы"
      ></img>
      <div className={styles.data}>
        <p>
          <b>Продам грибы оптом</b>
        </p>
        <p className={styles.city}>г. Санкт-Петербург</p>
        <p>
          <b>от 1850 р/кг</b>
        </p>
      </div>
    </div>
  );
};
