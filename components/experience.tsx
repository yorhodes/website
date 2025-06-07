import { Experience, Role } from "../types";
import { Card, CardContent } from '@/components/ui/card';

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
  <Card key={experience.name} className="p-4">
    <CardContent className="flex flex-col sm:flex-row gap-5 p-0">
      <div className="flex flex-col items-center w-24 flex-shrink-0">
        <a href={experience.link} className="text-center" target="_blank" rel="noopener noreferrer">
          <img
            className="bg-white p-3 w-20 h-20 rounded-lg object-contain"
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
    </CardContent>
  </Card>
);

export default ExperienceElem;
