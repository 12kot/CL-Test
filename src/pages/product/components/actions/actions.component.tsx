import styles from "./styles.module.scss";

export const ProductActions = () => {
  return (
    <section className={styles.container}>
      <button>Связаться с продавцом</button>
      <button className={styles.secondButton}>
        Добавить в список отслеживания
      </button>
    </section>
  );
};
