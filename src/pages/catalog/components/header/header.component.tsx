import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SearchSvg, ArrowSvg } from "assets";

import styles from "./styles.module.scss";

export const Header = () => {
  const { t } = useTranslation();

  const [isFirst, setIsFirst] = useState<boolean>(true);

  const handleSearch = () => {
    //Открыть модалку поиска
  };

  const handleSwitch = (value: boolean) => {
    //dispatch(someMethod(option))
    setIsFirst(value)
  }

  return (
    <header className={styles.container}>
      <section className={styles.searchContainer}>
        <div className={styles.item}>
          <button className={styles.back}>
            <ArrowSvg />
          </button>
          <h1>{t("catalog.header")}</h1>
        </div>
        <button onClick={handleSearch}>
          <SearchSvg />
        </button>
      </section>
      <section className={styles.switch}>
        <button
          className={`${isFirst && styles.active}`}
          onClick={() => handleSwitch(true)}
        >
          {t("catalog.switch.option1")}
        </button>
        <button
          className={`${!isFirst && styles.active}`}
          onClick={() => handleSwitch(false)}
        >
          {t("catalog.switch.option2")}
        </button>
      </section>
    </header>
  );
};
