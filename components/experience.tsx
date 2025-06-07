import { Experience, Role } from "../types";

import appendix from "../data/appendix.json";
import Appendix from "./appendix";

const ExperienceRole = (role: Role) => (
  <div key={role.title + role.end} className="flex flex-row">
    <div className="flex flex-col w-4/5">
      <p className="font-bold">{role.title}</p>
      <p className="text-sm">{Appendix(role.description ?? "", appendix)}</p>
    </div>
    <div className="flex flex-col w-1/5 text-right">
      <p className="text-xs">{role.end}</p>
      <p className="text-xs">{role.start}</p>
    </div>
  </div>
);

const ExperienceElem = (experience: Experience) => (
  <div className="flex flex-row gap-5" key={experience.name}>
    <div className="flex flex-col items-center max-w-[5rem]">
      <a href={experience.link} className="text-center" target="_blank" rel="noopener noreferrer">
        <img
          className="bg-white p-3 max-w-[5rem] min-h-[5rem] rounded-lg object-scale-down"
          src={`/logos/${experience.logo}`}
          alt={experience.name}
        />
        <p className="font-bold">{experience.name}</p>
      </a>
      <p className="text-xs -my-1">{experience.location}</p>
    </div>
    <div className="flex flex-col w-full gap-3">
      {experience.roles.map(ExperienceRole)}
    </div>
  </div>
);

export default ExperienceElem;
