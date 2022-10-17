import { Experience, Place } from "../components/experience";

const celo: Place = {
  name: "Celo",
  logo: "celo-logo-color.png",
  url: "http://celo.org/",
  location: "San Francisco, CA",
};

const rice: Place = {
  name: "Rice University",
  logo: "rice-university_logo.png",
  url: "https://www.rice.edu/",
  location: "Houston, TX",
};

const consensys: Place = {
  name: "Consensys",
  logo: "consensys-logo.jpeg",
  url: "https://www.consensys.net/",
  location: "Brooklyn, NY",
};

export const experiences: Experience[] = [
  {
    title: "Founding Engineer",
    name: "Hyperlane",
    url: "https://hyperlane.xyz/",
    logo: "hyperlane.png",
    start: "April 2022",
    end: "Present",
    location: "New York City, NY",
  },
  {
    title: "Smart Contract Engineer",
    name: "Gauntlet",
    url: "https://gauntlet.network/",
    logo: "gauntlet.png",
    start: "December 2021",
    end: "May 2022",
    location: "Remote",
  },
  {
    ...celo,
    title: "Contracts and Primitives Lead",
    start: "March 2020",
    end: "December 2021",
    location: "San Francisco, CA",
  },
  {
    ...celo,
    title: "Protocol Engineer (Contract)",
    start: "August 2019",
    end: "March 2020",
    location: "Houston, TX",
  },
  {
    name: "Rice University CoFES",
    logo: "cofes-logo.png",
    url: "https://cofes.rice.edu/",
    title: "Faculty Instructor",
    start: "September 2019",
    end: "May 2020",
    location: "Houston, TX",
  },
  {
    ...celo,
    title: "Protocol Engineering Intern",
    start: "April 2019",
    end: "August 2019",
    location: "San Francisco, CA",
  },
  {
    ...rice,
    url: "https://medium.com/rice-blockchain/course/home",
    title: "Student Taught Course Instructor",
    start: "September 2018",
    end: "May 2019",
  },
  {
    name: "IBM Blockchain Garage",
    url: "https://www.ibm.com/blockchain",
    logo: "IBM-Blockchain.jpeg",
    title: "Software Engineering Intern",
    start: "May 2018",
    end: "August 2018",
    location: "Manhattan, NY",
  },
  {
    name: "Rice Blockchain",
    url: "https://blockchain.rice.edu/",
    location: "Houston, TX",
    logo: "rice_blockchain.svg",
    title: "Founder, President",
    start: "September 2017",
    end: "May 2020",
  },
  {
    ...consensys,
    title: "Smart Contracts Intern",
    start: "May 2017",
    end: "August 2017",
  },
  {
    ...rice,
    title: "Computer Science BSE",
    start: "August 2016",
    end: "May 2020",
  },
  {
    ...consensys,
    title: "Software Engineering Intern",
    start: "May 2016",
    end: "August 2016",
  },
  {
    title: "Student",
    name: "Bronx High School of Science",
    url: "https://www.bxscience.edu/",
    logo: "bxscience-logo.jpeg",
    start: "September 2012",
    end: "May 2016",
    location: "Bronx, NY",
  },
];
