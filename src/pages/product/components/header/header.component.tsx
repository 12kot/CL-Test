import { MiniArrowSvg } from "assets";

import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

interface IProps {
  categoryName: string;
}

export const ProductHeader = ({ categoryName }: IProps) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <header className={styles.container}>
      <button className={styles.back} onClick={handleBackClick}>
        <MiniArrowSvg />
      </button>
      <p>
        <b>{categoryName}</b>
      </p>
    </header>
  );
};
