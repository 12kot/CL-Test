import { CatalogSvg, HomeSvg, PlusSvg, ProfileSvg } from "assets";

import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <button className={styles.add}>
        <PlusSvg />
      </button>

      <section className={styles.container}>
        <div className={styles.item}>
          <HomeSvg />
          <p>{t('footer.home')}</p>
        </div>
        <div className={styles.item}>
          <CatalogSvg />
          <p>{t('footer.catalog')}</p>
        </div>
      </section>
      <section className={styles.container}>
        <div className={styles.item}>
          <ProfileSvg />
          <p>{t('footer.messages')}</p>
        </div>
        <div className={styles.item}>
          <ProfileSvg />
          <p>{t('footer.profile')}</p>
        </div>
      </section>
    </footer>
  );
};
