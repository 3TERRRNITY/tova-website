import {
  IDepartaments,
  ILogos,
  IProjects,
  IService,
  IServices,
  IVacancy,
} from "./types";
export const IMAGES: ILogos[] = [
  { img: "/logos/approval.svg", key: 1 },
  { img: "/logos/av.svg", key: 2 },
  { img: "/logos/avimed.svg", key: 3 },
  { img: "/logos/FRENCHI.svg", key: 4 },
  { img: "/logos/ipharma.svg", key: 5 },
  { img: "/logos/migrenol.svg", key: 6 },
  { img: "/logos/mindly.png", key: 7 },
  { img: "/logos/vademecum.svg", key: 8 },
  { img: "/logos/madaia.svg", key: 9 },
  { img: "/logos/pfarm.svg", key: 10 },
  { img: "/logos/rambam.svg", key: 11 },
];
export const PROJECTS: IProjects[] = [
  {
    title: "Avivir",
    img: "",
    description:
      "Aliqua magna cillum id et irure amet est ex cillum sit dolore velit.",
    id: "webdev",
  },
  {
    title: "Aimi",
    img: "",
    description:
      "Aliqua magna cillum id et irure amet est ex cillum sit dolore velit.",
    id: "webdev",
  },
  {
    title: "Madaia",
    img: "",
    description:
      "Aliqua magna cillum id et irure amet est ex cillum sit dolore velit.",
    id: "brand",
  },
  {
    title: "frenchi",
    img: "",
    description:
      "Aliqua magna cillum id et irure amet est ex cillum sit dolore velit.",
    id: "webdev",
  },
  {
    title: "vademekum",
    img: "",
    description:
      "Aliqua magna cillum id et irure amet est ex cillum sit dolore velit.",
    id: "brand",
  },

  // TODO: снести в скором времени
  {
    title: "frenchi",
    img: "",
    description:
      "Aliqua magna cillum id et irure amet est ex cillum sit dolore velit.",
    id: "graphic",
  },
  {
    title: "vademekum",
    img: "",
    description:
      "Aliqua magna cillum id et irure amet est ex cillum sit dolore velit.",
    id: "graphic",
  },
  {
    title: "frenchi",
    img: "",
    description:
      "Aliqua magna cillum id et irure amet est ex cillum sit dolore velit.",
    id: "marketing",
  },
  {
    title: "vademekum",
    img: "",
    description:
      "Aliqua magna cillum id et irure amet est ex cillum sit dolore velit.",
    id: "marketing",
  },
  {
    title: "frenchi",
    img: "",
    description:
      "Aliqua magna cillum id et irure amet est ex cillum sit dolore velit.",
    id: "smm",
  },
  {
    title: "vademekum",
    img: "",
    description:
      "Aliqua magna cillum id et irure amet est ex cillum sit dolore velit.",
    id: "smm",
  },
  {
    title: "frenchi",
    img: "",
    description:
      "Aliqua magna cillum id et irure amet est ex cillum sit dolore velit.",
    id: "other",
  },
  {
    title: "vademekum",
    img: "",
    description:
      "Aliqua magna cillum id et irure amet est ex cillum sit dolore velit.",
    id: "other",
  },
];

export const DEPARTAMENTS: IDepartaments[] = [
  {
    title: "Маркетинг",
    description: ["Криэйторы", "Копирайтеры", "Таргетологи"],
  },
  {
    title: "Дизайн",
    description: ["Дизайнеры", "Сторисмейкеры"],
  },
  {
    title: "Разработка",
    description: ["Программисты", "seo-специалисты"],
  },
  {
    title: "Клиентский сервис",
    description: ["Project-менеджеры", "аккаунт-менеджеры"],
  },
];
// TODO: перевести на Strappi
export const VACANCY: IVacancy[] = [
  {
    title: "SMM",
    description:
      "если GPT для вас похож на велосипед - вы просто садитесь, берете руль в руки и едете с нами по одной дороге, то мы с нетерпением ждем ваше cv к нам на почту",
  },
];

export const SERVICES: IServices[] = [
  {
    title: "брендинг",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "brand",
    price: "от 2700/час",
  },
  {
    title: "веб-разработка",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "webdev",
    price: "от 2700/час",
  },
  {
    title: "графический дизайн",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "graphic",
    price: "от 2700/час",
  },
  {
    title: "маркетинг",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "marketing",
    price: "от 2700/час",
  },
  {
    title: "SMM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "smm",
    price: "от 2700/час",
  },
  {
    title: "Другое",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "other",
    price: "от 2700/час",
  },
];

export const SERVICE: IService[] = [
  {
    title: "брендинг",
    description:
      "Создаем сайты под ключ для онлайн или оффлайн бизнеса. Формируем продающую структуру с высокой конверсией. Создаем чистый эстетичный дизайн для всех разрешений без перегруза. Внедряем аккуратную анимацию. Соблюдаем современные тренды, а также потребности клиентов",
    points: [
      "- Создание дизайна сайта",
      "- разработка сайта на актуальных технологиях",
      "- Адаптация под разные устройства",
      "- поддержание сайта",
    ],
    href: "brand",
  },
  {
    title: "Веб-разработка",
    description:
      "Создаем сайты под ключ для онлайн или оффлайн бизнеса. Формируем продающую структуру с высокой конверсией. Создаем чистый эстетичный дизайн для всех разрешений без перегруза. Внедряем аккуратную анимацию. Соблюдаем современные тренды, а также потребности клиентов",
    points: [
      "- Создание дизайна сайта",
      "- разработка сайта на актуальных технологиях",
      "- Адаптация под разные устройства",
      "- поддержание сайта",
    ],
    href: "webdev",
  },
  {
    title: "графический дизайн",
    description:
      "Создаем сайты под ключ для онлайн или оффлайн бизнеса. Формируем продающую структуру с высокой конверсией. Создаем чистый эстетичный дизайн для всех разрешений без перегруза. Внедряем аккуратную анимацию. Соблюдаем современные тренды, а также потребности клиентов",
    points: [
      "- Создание дизайна сайта",
      "- разработка сайта на актуальных технологиях",
      "- Адаптация под разные устройства",
      "- поддержание сайта",
    ],
    href: "graphic",
  },
  {
    title: "маркетинг",
    description:
      "Создаем сайты под ключ для онлайн или оффлайн бизнеса. Формируем продающую структуру с высокой конверсией. Создаем чистый эстетичный дизайн для всех разрешений без перегруза. Внедряем аккуратную анимацию. Соблюдаем современные тренды, а также потребности клиентов",
    points: [
      "- Создание дизайна сайта",
      "- разработка сайта на актуальных технологиях",
      "- Адаптация под разные устройства",
      "- поддержание сайта",
    ],
    href: "marketing",
  },
  {
    title: "SMM",
    description:
      "Создаем сайты под ключ для онлайн или оффлайн бизнеса. Формируем продающую структуру с высокой конверсией. Создаем чистый эстетичный дизайн для всех разрешений без перегруза. Внедряем аккуратную анимацию. Соблюдаем современные тренды, а также потребности клиентов",
    points: [
      "- Создание дизайна сайта",
      "- разработка сайта на актуальных технологиях",
      "- Адаптация под разные устройства",
      "- поддержание сайта",
    ],
    href: "smm",
  },
  {
    title: "Другое",
    description:
      "Создаем сайты под ключ для онлайн или оффлайн бизнеса. Формируем продающую структуру с высокой конверсией. Создаем чистый эстетичный дизайн для всех разрешений без перегруза. Внедряем аккуратную анимацию. Соблюдаем современные тренды, а также потребности клиентов",
    points: [
      "- Создание дизайна сайта",
      "- разработка сайта на актуальных технологиях",
      "- Адаптация под разные устройства",
      "- поддержание сайта",
    ],
    href: "other",
  },
];
