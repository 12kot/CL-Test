//@ts-ignore
import { ApiRequest } from "api/axios";
//@ts-ignore
const ENDPOINT_NAME = "product";

export interface IImg {
  url: string;
  id: number;
  alt: string;
}

export interface IProductData {
  name: string;
  delivery: string;
  price: string;

  description: string;
  date: string;
  isFavorite: boolean;
}

export interface IProduct {
  category: {
    name: string;
  };
  seller: {
    rating: string;
  };
  data: IProductData;
  imgs: IImg[];
  id: number;
}

export const ApiGetProductById = async (
  id: number
): Promise<IProduct | null> => {
  //return ApiRequest({ path: `${ENDPOINT_NAME}/lyalyatapalya?id=${id}`, method: "GET" });
  return allProducts.find((pr) => pr.id === id) || null;
};

const product1: IProduct = {
  id: 1,
  imgs: [
    {
      url: "https://storage.in-news.ru/uploads/images/n3Tq7K6nFnx1Rb8I7KWA_widened_652.jpeg",
      alt: "Photo",
      id: 1,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHwfsoWfP4AmqaBmESIrYFpv_D7iwHHppLQ&s",
      alt: "Photo",
      id: 2,
    },
    {
      url: "https://www.nippon.com/ru/ncommon/contents/japan-glances/1334379/1334379.jpg",
      alt: "Photo",
      id: 3,
    },
  ],
  category: {
    name: "Грибы",
  },
  seller: {
    rating: "5.0",
  },

  data: {
    name: "Шампиньоны свежие. Урожай 2023",
    delivery: "Доставка в Тамбов, Тамбовская обл., Россия",
    price: "от 93.50 ₽/кг",

    description: `ООО Фьюжен Менеджмент предлагает 
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
Звонить строго с: 9.00-18.00(по МСК Пн-Пт)`,
    date: "Сегодня в 03:01:0",
    isFavorite: true,
  },
};

const product2: IProduct = {
  id: 2,
  imgs: [
    {
      url: "https://storage.in-news.ru/uploads/images/n3Tq7K6nFnx1Rb8I7KWA_widened_652.jpeg",
      alt: "Photo",
      id: 1,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHwfsoWfP4AmqaBmESIrYFpv_D7iwHHppLQ&s",
      alt: "Photo",
      id: 2,
    },
    {
      url: "https://www.nippon.com/ru/ncommon/contents/japan-glances/1334379/1334379.jpg",
      alt: "Photo",
      id: 3,
    },
  ],
  category: {
    name: "Грибы",
  },
  seller: {
    rating: "5.0",
  },

  data: {
    name: "2 Шампиньоны свежие. Урожай 2023",
    delivery: "Доставка в Тамбов, Тамбовская обл., Россия",
    price: "от 93.50 ₽/кг",

    description: `ООО Фьюжен Менеджмент предлагает 
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
Звонить строго с: 9.00-18.00(по МСК Пн-Пт)`,
    date: "Сегодня в 03:01:0",
    isFavorite: false,
  },
};

const product3: IProduct = {
  id: 3,
  imgs: [
    {
      url: "https://storage.in-news.ru/uploads/images/n3Tq7K6nFnx1Rb8I7KWA_widened_652.jpeg",
      alt: "Photo",
      id: 1,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHwfsoWfP4AmqaBmESIrYFpv_D7iwHHppLQ&s",
      alt: "Photo",
      id: 2,
    },
    {
      url: "https://www.nippon.com/ru/ncommon/contents/japan-glances/1334379/1334379.jpg",
      alt: "Photo",
      id: 3,
    },
  ],
  category: {
    name: "Грибы",
  },
  seller: {
    rating: "5.0",
  },

  data: {
    name: "3 Шампиньоны свежие. Урожай 2023",
    delivery: "Доставка в Тамбов, Тамбовская обл., Россия",
    price: "от 93.50 ₽/кг",

    description: `ООО Фьюжен Менеджмент предлагает 
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
Звонить строго с: 9.00-18.00(по МСК Пн-Пт)`,
    date: "Сегодня в 03:01:0",
    isFavorite: false,
  },
};

const product4: IProduct = {
  id: 4,
  imgs: [
    {
      url: "https://storage.in-news.ru/uploads/images/n3Tq7K6nFnx1Rb8I7KWA_widened_652.jpeg",
      alt: "Photo",
      id: 1,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHwfsoWfP4AmqaBmESIrYFpv_D7iwHHppLQ&s",
      alt: "Photo",
      id: 2,
    },
    {
      url: "https://www.nippon.com/ru/ncommon/contents/japan-glances/1334379/1334379.jpg",
      alt: "Photo",
      id: 3,
    },
  ],
  category: {
    name: "Грибы",
  },
  seller: {
    rating: "5.0",
  },

  data: {
    name: "4 Шампиньоны свежие. Урожай 2023",
    delivery: "Доставка в Тамбов, Тамбовская обл., Россия",
    price: "от 93.50 ₽/кг",

    description: `ООО Фьюжен Менеджмент предлагает 
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
Звонить строго с: 9.00-18.00(по МСК Пн-Пт)`,
    date: "Сегодня в 03:01:0",
    isFavorite: true,
  },
};

const product5: IProduct = {
  id: 5,
  imgs: [
    {
      url: "https://storage.in-news.ru/uploads/images/n3Tq7K6nFnx1Rb8I7KWA_widened_652.jpeg",
      alt: "Photo",
      id: 1,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHwfsoWfP4AmqaBmESIrYFpv_D7iwHHppLQ&s",
      alt: "Photo",
      id: 2,
    },
    {
      url: "https://www.nippon.com/ru/ncommon/contents/japan-glances/1334379/1334379.jpg",
      alt: "Photo",
      id: 3,
    },
  ],
  category: {
    name: "Грибы",
  },
  seller: {
    rating: "5.0",
  },

  data: {
    name: "5 Шампиньоны свежие. Урожай 2023",
    delivery: "Доставка в Тамбов, Тамбовская обл., Россия",
    price: "от 93.50 ₽/кг",

    description: `ООО Фьюжен Менеджмент предлагает 
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
Звонить строго с: 9.00-18.00(по МСК Пн-Пт)`,
    date: "Сегодня в 03:01:0",
    isFavorite: false,
  },
};

const product6: IProduct = {
  id: 6,
  imgs: [
    {
      url: "https://storage.in-news.ru/uploads/images/n3Tq7K6nFnx1Rb8I7KWA_widened_652.jpeg",
      alt: "Photo",
      id: 1,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHwfsoWfP4AmqaBmESIrYFpv_D7iwHHppLQ&s",
      alt: "Photo",
      id: 2,
    },
    {
      url: "https://www.nippon.com/ru/ncommon/contents/japan-glances/1334379/1334379.jpg",
      alt: "Photo",
      id: 3,
    },
  ],
  category: {
    name: "Грибы",
  },
  seller: {
    rating: "5.0",
  },

  data: {
    name: "6 Шампиньоны свежие. Урожай 2023",
    delivery: "Доставка в Тамбов, Тамбовская обл., Россия",
    price: "от 93.50 ₽/кг",

    description: `ООО Фьюжен Менеджмент предлагает 
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
Звонить строго с: 9.00-18.00(по МСК Пн-Пт)`,
    date: "Сегодня в 03:01:0",
    isFavorite: false,
  },
};

const allProducts = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
];
