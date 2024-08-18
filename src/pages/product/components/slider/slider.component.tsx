import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { useDebounce } from "common";
import { IImg } from "api";

interface IProps {
  imgs: IImg[];
}

export const Slider = ({ imgs }: IProps) => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const debouncedScrollLeft = useDebounce(scrollLeft, 100);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const newIndex = Math.round(
      debouncedScrollLeft / wrapperRef.current.clientWidth
    );
    setCurrentIndex(newIndex);
  }, [debouncedScrollLeft]);

  const handleScroll = () => {
    if (!wrapperRef.current) return;
    setScrollLeft(wrapperRef.current.scrollLeft);
  };

  const handleIndicatorClick = (index: number) => {
    if (!wrapperRef.current) return;

    const scrollPosition = wrapperRef.current.clientWidth * index;
    wrapperRef.current.scrollTo({ left: scrollPosition, behavior: "smooth" });

    setCurrentIndex(index);
  };

  return (
    <section className={styles.container}>
      <div className={styles.wrapper} onScroll={handleScroll} ref={wrapperRef}>
        {imgs.map((img) => (
          <img src={img.url} alt={img.alt} key={img.id} />
        ))}
      </div>
      <div className={styles.pagination}>
        <div className={styles.buttons}>
          {Array(imgs.length).fill(null).map((_, i) => (
            <button
              key={i}
              onClick={() => handleIndicatorClick(i)}
              className={`${currentIndex === i && styles.active}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
