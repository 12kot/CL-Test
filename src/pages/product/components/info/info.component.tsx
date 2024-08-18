import { LocationSvg, RatingSvg } from "assets";
import styles from "./styles.module.scss";
import { Trans, useTranslation } from "react-i18next";

interface IProps {
  name: string;
  delivery: string;
  price: string;
  sellerRating: string;
}

export const ProductInfo = ({
  name,
  delivery,
  price,
  sellerRating,
}: IProps) => {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <h2>{name}</h2>
      <div className={styles.address}>
        <LocationSvg />
        <p>{delivery}</p>
      </div>
      <div className={styles.price}>
        <p>{t("product.price")}</p>
        <p>
          <b>{price}</b>
        </p>
      </div>
      <div className={styles.rating}>
        <RatingSvg />
        <p>
        <Trans
          i18nKey={t('product.sellerRating', {sellerRating: sellerRating})}
          components={{ span: <span /> }}
        />
        </p>
      </div>
    </section>
  );
};
