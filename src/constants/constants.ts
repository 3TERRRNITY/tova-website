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
    title: "Aimi",
    img: "/main/aimi.webp",
    secondImage: "/projects/projects_aimi.png",
    description: "Нейминг, фирменный стиль, дизайн и копирайтинг.",
    id: ["brand", "graphic", "smm"],
    category: "брендинг, графический дизайн, smm",
  },
  {
    title: "Madaia",
    img: "/main/madaia.webp",
    secondImage: "/projects/projects_madaia2.png",
    description: "Фирменный стиль, дизайн, разработка сайта.",
    id: ["smm", "marketing", "other"],
    category: "веб-разработка",
  },
  {
    title: "Avivir",
    img: "/main/avivir.webp",
    secondImage: "/projects/projects_avivir.png",
    description:
      "Концепция, создание фирменного стиля, дизайн, разработка сайта, техническая поддержка",
    id: ["webdev", "brand", "graphic", "smm", "marketing", "other"],
    category: "брендинг, веб-разработка, графический дизайн, smm",
  },
  {
    title: "frenchi",
    img: "/main/frenchi.webp",
    secondImage: "/projects/projects_frenchi.png",
    description: "Концепция, UX-исследование, дизайн и разработка сайта.",
    id: ["webdev"],
    category: "веб-разработка",
  },

  {
    title: "mindly",
    img: "/main/mindly.webp",
    secondImage: "/projects/projects_mindly.png",
    description:
      "Концепция, создание фирменного стиля, разработка сайта, дизайн-поддержка",
    id: ["brand", "graphic", "smm", "marketing", "other"],
    category: "брендинг, веб-разработка, графический дизайн, smm",
  },
  {
    title: "approval",
    img: "/projects/projects_approval1.webp",
    secondImage: "/projects/projects_approval2.webp",
    description: "фирменный стиль, дизайн, концепция ",
    id: [],
    category: "брендинг,графический дизайн",
  },
  {
    title: "rambam",
    img: "/projects/projects_rambam1.webp",
    secondImage: "/projects/projects_rambam2.webp",
    description: "концепция, фирменный стиль",
    id: [],
    category: "брендинг,графический дизайн",
  },
  {
    title: "vademecum",
    img: "/main/vdm.webp",
    secondImage: "/projects/projects_vdm.png",
    description: "фирменный стиль, создание сайта, дизайн-поддержка",
    id: ["webdev"],
    category: "веб-разработка",
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
    title: "дизайн-поддержка",
    description:
      "Ежемесячная подписка на команду проджект менеджер+дизайнер: графический, UX/UI, 3D, motion",
    href: "marketing",
    price: "1900/час",
    image: "/main/service/design.png",
  },
  {
    title: "видео-продакшн",
    description:
      "мы специализируемся на полном цикле производства видеоконтента — от создания рекламных роликов до съемки сериалов и клипов.",
    href: "other",
    price: "по запросу",
    image: "/main/service/video.png",
  },
  {
    title: "разработка",
    description:
      "Разрабатываем и усовершенствуем IT-проекты, предлагая полный спектр frontend и backend услуг в форматах аутсорсинга и аутстаффинга.",
    href: "webdev",
    price: "1900/час",
    image: "/main/service/web.png",
  },
  {
    title: "ux/ui",
    description:
      "осуществляем UX-анализ, разрабатывая на его основе удобные интерфейсы для комплексных сервисов. Также создаём мобильные и веб-приложения, используя no-code технологии.",
    href: "graphic",
    price: "1900/час",
    image: "/main/service/graphic.png",
  },

  {
    title: "брендинг",
    description:
      "разрабатываем уникальный брендинг, создавая запоминающиеся визуальные образы и концепции, подчёркивающие индивидуальность вашего бизнеса.",
    href: "brand",
    price: "1900/час",
    image: "/main/service/brand.png",
  },
  {
    title: "SMM",
    description:
      "формируем стратегии SMM, эффективно продвигая ваш бренд в социальных сетях для повышения узнаваемости и вовлеченности аудитории.",
    href: "smm",
    price: "1900/час",
    image: "/main/service/smm.png",
  },
];

export const SERVICE: IService[] = [
  {
    // done
    title: "брендинг",
    description:
      "Предлагаем комплексные услуги брендинга, направленные на создание сильного и узнаваемого образа вашей компании. Наша задача — создать мощный и запоминающийся бренд, который точно отражает суть вашего бизнеса и привлекает вашу целевую аудиторию.",
    points: [
      "- нейминг, логотип",
      "- разработка бренд-идентичности",
      "- создание фирменного стиля",
      "- создание гайд-бука",
    ],
    href: "brand",
  },
  {
    // done
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
    // done
    title: "графический дизайн",
    description:
      "Предоставляем полный спектр услуг графического дизайна, варьируя от разработки дизайна упаковки до создания постеров и баннеров. Нацелены на создание визуальных решений, которые выделяются и одновременно передают ключевые сообщения вашего бренда",
    points: [
      "- дизайн упаковки",
      "- создание постеров и баннеров",
      "- графический дизайн для печати и цифровых медиа",
      "- типографика и визуальная композиция",
    ],
    href: "graphic",
  },
  {
    // done
    title: "маркетинг",
    description:
      "Создаем маркетинговые стратегии, которые эффективно привлекают и удерживают клиентов, увеличивая видимость бренда и стимулируя продажи. Мы применяем современные подходы и инновационные решения, чтобы выделить ваш бизнес на рынке.",
    points: [
      "- разработка маркетинговой стратегии",
      "- цифровой маркетинг",
      "- креативные кампании и контент",
    ],
    href: "marketing",
  },
  {
    // done
    title: "SMM",
    description:
      "SMM включает в себя разработку и реализацию стратегий для социальных сетей, ориентированных на увеличение узнаваемости бренда, вовлечение аудитории и повышение лояльности клиентов. Мы используем креативные подходы для достижения конкретных бизнес-целей",
    points: [
      "- управление социальными сетями",
      "- разработка SMM-стратегии",
      "- контент-маркетинг",
    ],
    href: "smm",
  },
  {
    // done
    title: "видео-продакшн",
    description:
      "Предлагаем комплексные услуги видеопродакшна, включая съемку реклам, музыкальных клипов, сериалов и другого видеоконтента. Наша команда состоит из опытных режиссеров, операторов и продюсеров с богатым опытом в индустрии рекламы и кинематографа",
    points: [
      "- commercial",
      "- music video",
      "- film & tv",
      "- всестороннее производство",
    ],
    //TODO: поменять
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
