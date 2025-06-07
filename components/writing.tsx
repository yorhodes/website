import { Content } from "../types";

const WritingElem = (content: Content) => (
  <div key={content.title} className="flex flex-row">
    <div className="flex flex-col w-3/4">
      <a href={content.link} target="_blank" rel="noopener noreferrer" className="font-bold">
        {content.title}
      </a>
      <p className="text-sm">{content.description}</p>
    </div>
    <div className="flex flex-col w-1/4 text-right">
      <p className="text-xs">{content.published}</p>
    </div>
  </div>
);

export default WritingElem;
