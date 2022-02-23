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
    title: "Smart Contract Engineer",
    name: "Gauntlet",
    url: "https://gauntlet.network/",
    logo: "gauntlet.png",
    description: "",
    date: "December 2021 - Present",
    location: "Remote",
  },
  {
    ...celo,
    title: "Contracts and Primitives Lead",
    description: "",
    date: "March 2020 - December 2021",
    location: "San Francisco, CA",
  },
  {
    ...celo,
    title: "Protocol Engineer (Contract)",
    description: "",
    date: "August 2019 - March 2020",
    location: "Houston, TX",
  },
  {
    name: "Rice University CoFES",
    logo: "cofes-logo.png",
    url: "https://cofes.rice.edu/",
    title: "Faculty Instructor",
    description: "",
    date: "Sept 2019 - May 2020",
    location: "Houston, TX",
  },
  {
    ...celo,
    title: "Protocol Engineering Intern",
    description: "",
    date: "April 2019 - August 2019",
    location: "San Francisco, CA",
  },
  {
    ...rice,
    url: "https://medium.com/rice-blockchain/course/home",
    title: "Student Taught Course Instructor",
    description: "",
    date: "Sept 2018 - May 2019",
  },
  {
    name: "IBM Blockchain Garage",
    url: "https://www.ibm.com/blockchain",
    logo: "IBM-Blockchain.jpeg",
    title: "Software Engineering Intern",
    description: "",
    date: "May 2018 - August 2018",
    location: "Manhattan, NY",
  },
  {
    name: "Rice Blockchain",
    url: "https://blockchain.rice.edu/",
    location: "Houston, TX",
    logo: "rice_blockchain.svg",
    title: "Founder, President",
    description: "",
    date: "Sept 2017 - May 2020",
  },
  {
    ...consensys,
    title: "Smart Contracts Intern",
    description: "",
    date: "May 2017 - August 2017",
  },
  {
    ...rice,
    title: "Computer Science BSE",
    description: "",
    date: "August 2016 - May 2020",
  },
  {
    ...consensys,
    title: "Software Engineering Intern",
    description: "",
    date: "May 2016 - August 2016",
  },
  {
    title: "Student",
    name: "Bronx High School of Science",
    url: "https://www.bxscience.edu/",
    logo: "bxscience-logo.jpeg",
    description: "",
    date: "September 2012 - May 2016",
    location: "Bronx, NY",
  },
];
