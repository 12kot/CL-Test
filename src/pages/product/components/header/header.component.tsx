import { MiniArrowSvg } from "assets";

import styles from "./styles.module.scss";

export const ProductHeader = () => {
  return (
    <header className={styles.container}>
      <button className={styles.back} onClick={() => {}}>
        <MiniArrowSvg />
      </button>
      <p>
        <b>Грибы</b>
      </p>
    </header>
  );
};
