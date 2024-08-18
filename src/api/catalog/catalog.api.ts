import { ApiRequest } from "api/axios";

const ENDPOINT_NAME = "category";

const mookedCategory: ICategory = {
  count: 6,
  products: [
    {
      id: 1,
      imgUrl:
        "https://storage.in-news.ru/uploads/images/n3Tq7K6nFnx1Rb8I7KWA_widened_652.jpeg",
      imgAlt: "Грибы",
      name: "Продам грибы оптом",
      city: "г. Санкт-Петербург",
      price: "от 1850 р/кг",
      isFavorite: true,
    },
    {
      id: 2,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHwfsoWfP4AmqaBmESIrYFpv_D7iwHHppLQ&s",
      imgAlt: "Грибы",
      name: "Продам грибы оптом",
      city: "г. Санкт-Петербург",
      price: "от 2000 р/кг",
      isFavorite: false,
    },
    {
      id: 3,
      imgUrl:
        "https://www.nippon.com/ru/ncommon/contents/japan-glances/1334379/1334379.jpg",
      imgAlt: "Грибы",
      name: "Продам грибы оптом",
      city: "г. Санкт-Петербург",
      price: "от 100 р/кг",
      isFavorite: false,
    },
    {
      id: 4,
      imgUrl:
        "https://lafoy.ru/photo_l/foto-2373-0.jpg",
      imgAlt: "Грибы",
      name: "Продам грибы оптом",
      city: "г. Санкт-Петербург",
      price: "от 10000 р/кг",
      isFavorite: true,
    },
    {
      id: 5,
      imgUrl:
        "https://ethnomir.ru/upload/medialibrary/f30/mash.jpg",
      imgAlt: "Грибы",
      name: "Продам грибы оптом",
      city: "г. Санкт-Петербург",
      price: "от 1850 р/кг",
      isFavorite: false,
    },
    {
      id: 6,
      imgUrl:
        "https://panacea.clinic/wp-content/uploads/2023/09/gallyutsinogennyye-griby.jpg",
      imgAlt: "Грибы",
      name: "Продам грибы оптом",
      city: "г. Санкт-Петербург",
      price: "от 1850 р/кг",
      isFavorite: false,
    },
  ],
};

export interface ICategory {
  products: ICategoryProduct[];
  count: number;
}

export interface ICategoryProduct {
  id: number;
  imgUrl: string;
  imgAlt: string;
  name: string;
  city: string;
  price: string;
  isFavorite: boolean;
}

export const ApiGetCategory = async (id: number): Promise<ICategory | null> => {
  //return ApiRequest({ path: `${ENDPOINT_NAME}`, method: "POST" });
  return mookedCategory;
};
