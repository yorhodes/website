import ExperienceElem from "../components/experience";
import experiences from "../data/experience.json";

const ExperiencePage = () => (
  <div>
    <div className="flex flex-col gap-8">
      {experiences.map(ExperienceElem)}
    </div>
  </div>
);

export default ExperiencePage;
