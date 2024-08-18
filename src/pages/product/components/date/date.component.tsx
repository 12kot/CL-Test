import { CalendarSvg } from "assets";

import styles from "./styles.module.scss";

interface IProps {
  date: string;
}

export const ProductDate = ({ date }: IProps) => {
  return (
    <section className={styles.container}>
      <CalendarSvg />
      <p>{date}</p>
    </section>
  );
};
