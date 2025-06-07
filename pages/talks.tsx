import WritingElem from "../components/writing";

import talks from "../data/talks.json";

const TalksPage = () => (
  <div className="flex flex-col gap-3">
    {talks.map(WritingElem)}
  </div>
);

export default TalksPage;
