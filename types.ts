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

export enum Platform {
  Mail,
  Calendar,
  Github,
  Notion,
  Twitter,
  Reader,
  Substack,
  Spotify,
  LinkedIn,
  Chess,
  Medium,
  Goodreads,
  Reddit,
  Discord,
  Observable,
  Telegram,
  Steam,
  Ethereum
}

export interface Place {
  name: string;
  url: string;
  logo: string;
  location: string;
};

export interface BioContent {
  name: string;
  title: string;
  tagline: string;
};

export interface Experience extends Place {
  title: string;
  description?: string;
  start: string;
  end: string;
};

export interface Social {
  link: string;
  platform: Platform | string;
  label?: string;
};

export interface NavPage {
  link: string;
  text: string;
};

export interface Content {
  title: string;
  description: string;
  url: string;
  release: string;
};
