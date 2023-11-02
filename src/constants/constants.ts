import { IDepartaments, ILogos, IProjects, IVacancy } from "./types";
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
  },
  {
    title: "Aimi",
    img: "",
    description:
      "Aliqua magna cillum id et irure amet est ex cillum sit dolore velit.",
  },
  {
    title: "Madaia",
    img: "",
    description:
      "Aliqua magna cillum id et irure amet est ex cillum sit dolore velit.",
  },
  {
    title: "frenchi",
    img: "",
    description:
      "Aliqua magna cillum id et irure amet est ex cillum sit dolore velit.",
  },
  {
    title: "vademekum",
    img: "",
    description:
      "Aliqua magna cillum id et irure amet est ex cillum sit dolore velit.",
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
