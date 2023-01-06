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
