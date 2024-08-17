import { Card, Header } from "./components";

import styles from "./styles.module.scss";

export const CatalogPage = () => {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CatalogPage;
