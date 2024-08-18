import { CatalogSvg, HomeSvg, PlusSvg, ProfileSvg } from "assets";

import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  const { t } = useTranslation();

  const handleAdd = () => {
    //открыть модалку/страницу добавления
  };

  return (
    <footer className={styles.footer}>
      <button className={styles.add} onClick={handleAdd}>
        <PlusSvg />
      </button>

      <section className={styles.container}>
        <NavLink to="/catalog" className={styles.item} unstable_viewTransition>
          <HomeSvg />
          <p>{t("footer.home")}</p>
        </NavLink>
        <NavLink to="/catalog" className={styles.item} unstable_viewTransition>
          <CatalogSvg />
          <p>{t("footer.catalog")}</p>
        </NavLink>
      </section>
      <section className={styles.container}>
        <NavLink to="/catalog" className={styles.item} unstable_viewTransition>
          <ProfileSvg />
          <p>{t("footer.messages")}</p>
        </NavLink>
        <NavLink to="/catalog" className={styles.item} unstable_viewTransition>
          <ProfileSvg />
          <p>{t("footer.profile")}</p>
        </NavLink>
      </section>
    </footer>
  );
};
