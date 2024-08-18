import { useEffect } from "react";

import { useAppDispatch } from "store/store.interface";
import { getCategoryByIdReducer } from "store/slices";
import {
  ProductActions,
  ProductDate,
  ProductHeader,
  ProductInfo,
  Slider,
} from "./components";

import styles from "./styles.module.scss";

export const ProductPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategoryByIdReducer({ id: 1 }));
    //в зависимости передать id нужной категории
  }, []);

  return (
    <div className={styles.container}>
      <ProductHeader />
      <Slider />
      <ProductInfo />
      <ProductActions />
      <span className={styles.border} />
      <pre>{`ООО Фьюжен Менеджмент предлагает 
для приобретения оптом шампиньоны целые. 
Премиум качество для сетей.

Фасовка в ящики по 10кг.
Организуем доставку по территории РФ.
Условия оплаты: безналичный расчет. 
Цена указана с НДС 20 %.
Отгрузка продукции круглосуточная.

Цена за кг на самовывоз.
В запросе на продукцию большая просьба указывать
необходимый объем, если требуется доставка – 
населенный пункт отгрузки, номер контактного 
телефона, иные пожелания.

Заявки высылайте на электронную почту: 
af.managementrf1@gmail.com
Телефон/WhatsApp: +7 (995) 670-67-67 
Алексей Вячеславович
Звонить строго с: 9.00-18.00(по МСК Пн-Пт)
`}</pre>
      <ProductDate />
    </div>
  );
};

export default ProductPage;
