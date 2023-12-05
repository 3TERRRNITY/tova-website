import {
  IDepartaments,
  ILogos,
  IOptions,
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
    img: "/main/avivir.jpg",
    description:
      "Aliqua magna cillum id et irure amet est ex cillum sit dolore velit.",
    id: "webdev",
    category: "веб-разработка",
  },
  {
    title: "Aimi",
    img: "/main/aimi.jpg",
    description:
      "Aliqua magna cillum id et irure amet est ex cillum sit dolore velit.",
    id: "brand",
    category: "брендинг",
  },
  {
    title: "Madaia",
    img: "/main/madaia.jpg",
    description:
      "Aliqua magna cillum id et irure amet est ex cillum sit dolore velit.",
    id: "graphics",
    category: "графический дизайн",
  },
  {
    title: "frenchi",
    img: "/main/frenchi.jpg",
    description:
      "Aliqua magna cillum id et irure amet est ex cillum sit dolore velit.",
    id: "smm",
    category: "smm",
  },
  {
    title: "vademecum",
    img: "/main/vdm.jpg",
    description:
      "Aliqua magna cillum id et irure amet est ex cillum sit dolore velit.",
    id: "other",
    category: "ведение",
  },
  {
    title: "mindly",
    img: "/main/mindly.jpg",
    description:
      "Aliqua magna cillum id et irure amet est ex cillum sit dolore velit.",
    id: "other",
    category: "ведение",
  },
  {
    title: "approval",
    img: "/projects/approval/banner.png",
    description:
      "Aliqua magna cillum id et irure amet est ex cillum sit dolore velit.",
    id: "other",
    category: "ведение",
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
    image: "/main/service/brand.png",
  },
  {
    title: "веб-разработка",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "webdev",
    price: "от 2700/час",
    image: "/main/service/webdev.png",
  },
  {
    title: "графический дизайн",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "graphic",
    price: "от 2700/час",
    image: "/main/service/graphic.png",
  },
  {
    title: "дизайн-поддержка",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "marketing",
    price: "от 2700/час",
    image: "/main/service/design-help.png",
  },
  {
    title: "SMM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "smm",
    price: "от 2700/час",
    image: "/main/service/smm-service.png",
  },
  {
    title: "Другое",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "other",
    price: "от 2700/час",
    image: "/main/service/other.png",
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

export const OPTIONS: IOptions[] = [
  {
    title: "все",
    id: "all",
  },
  {
    title: "брендинг",
    id: "brand",
  },
  {
    title: "веб-разработка",
    id: "webdev",
  },
  {
    title: "графический дизайн",
    id: "graphic",
  },
  {
    title: "маркетинг",
    id: "marketing",
  },
  {
    title: "smm",
    id: "smm",
  },
  {
    title: "другое",
    id: "other",
  },
];
