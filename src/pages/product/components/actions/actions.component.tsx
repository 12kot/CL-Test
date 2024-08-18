import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

interface IProps {
  isFavorite: boolean;
}

export const ProductActions = ({ isFavorite }: IProps) => {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <button>{t("product.actions.contactSeller")}</button>
      <button className={`${styles.favorite} ${isFavorite && styles.delete}`}>
        {isFavorite
          ? t("product.actions.removeFovarite")
          : t("product.actions.addFovarite")}
      </button>
    </section>
  );
};
