// type digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

// export enum Month {
//   JAN = "January",
//   FEB = "February",
//   MAR = "March",
//   APR = "April",
//   MAY = "May",
//   JUN = "June",
//   JUL = "July",
//   AUG = "August",
//   SEP = "September",
//   OCT = "October",
//   NOV = "November",
//   DEC = "December",
// }

// export type Date = `${Month} 20${digit}${digit}` | "Present";

enum Platform {
  mail,
  calendar,
  github,
  notion,
  twitter,
  reader,
  substack,
  spotify,
  linkedin,
  chess,
  medium,
  goodreads,
  reddit,
  discordapp,
  observablehq,
  telegram,
  steamcommunity,
  ens,
}

export type PlatformString = keyof typeof Platform;

export interface Place {
  name: string;
  link: string;
  logo: string;
  location: string;
}

export interface BioContent {
  name: string;
  title: string;
  tagline: string;
  email?: string;
  calendar?: string;
}

export interface Role {
  title: string;
  description?: string;
  start: string;
  end: string;
}

export interface Experience extends Place {
  roles: Role[];
}

export interface Social {
  link: string;
  platform?: string;
  label?: string;
}

export interface NavPage {
  link: string;
  text: string;
}

export interface Content {
  title: string;
  description: string;
  link: string;
  published: string;
}
