import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { useDebounce } from "common";

export const Slider = () => {
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
        <img src="https://storage.in-news.ru/uploads/images/n3Tq7K6nFnx1Rb8I7KWA_widened_652.jpeg" />
        <img src="https://storage.in-news.ru/uploads/images/n3Tq7K6nFnx1Rb8I7KWA_widened_652.jpeg" />
        <img src="https://storage.in-news.ru/uploads/images/n3Tq7K6nFnx1Rb8I7KWA_widened_652.jpeg" />
      </div>
      <div className={styles.pagination}>
        <div className={styles.buttons}>
          <button
            onClick={() => handleIndicatorClick(0)}
            className={`${currentIndex === 0 && styles.active}`}
          />
          <button
            onClick={() => handleIndicatorClick(1)}
            className={`${currentIndex === 1 && styles.active}`}
          />
          <button
            onClick={() => handleIndicatorClick(2)}
            className={`${currentIndex === 2 && styles.active}`}
          />
        </div>
      </div>
    </section>
  );
};
