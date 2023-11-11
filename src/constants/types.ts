export interface IProjects {
  title: string;
  img: string;
  description: string;
}
export interface ILogos {
  img: string;
  key: number;
}

export interface IDepartaments {
  title: string;
  description: string[];
}

export interface IVacancy {
  title: string;
  description: string;
}

export interface IServices {
  title: string;
  href: string;
}

export interface IService {
  title: string;
  description: string;
  points: string[];
  href: string;
}
