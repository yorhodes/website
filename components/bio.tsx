import { BioContent } from "../types";

export const Bio = (content: BioContent) => (
  <div className="flex flex-col md:flex-row gap-10 py-5">
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">{content.name}</h1>
      <p className="text-lg">{content.title}</p>
      <p className="pt-5">{content.tagline}</p>
    </div>
    <img
      src="/headshot.jpeg"
      className="w-36 h-36 rounded-full grayscale hover:grayscale-0"
      alt="Headshot"
    />
  </div>
);


export default Bio;
