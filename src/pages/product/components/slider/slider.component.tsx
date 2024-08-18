import styles from "./styles.module.scss";

export const Slider = () => {
  return (
    <section className={styles.container}>
      <img src="https://storage.in-news.ru/uploads/images/n3Tq7K6nFnx1Rb8I7KWA_widened_652.jpeg" />
      <div className={styles.pagination}>
        <div className={styles.buttons}>
          <button className={styles.active}></button>
          <button></button>
          <button></button>
        </div>
      </div>
    </section>
  );
};
