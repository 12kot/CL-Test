import { CalendarSvg } from "assets";

import styles from "./styles.module.scss";

export const ProductDate = () => {
  return (
    <section className={styles.container}>
      <CalendarSvg />
      <p>Сегодня в 03:01:0</p>
    </section>
  );
};
