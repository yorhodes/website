const Appendix = (text: string, appendix: Record<string, string>) => {
  const query = Object.keys(appendix);
  if (query.length === 0) return text;
  const regex = new RegExp(`(${query.join('|')})`, 'gi');
  return text.split(regex).map((part, i) => {
    if (query.includes(part)) {
      return (
        <a
          key={`${part}-${i}`}
          href={appendix[part]}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm px-1 bg-gray-100 dark:bg-gray-700"
        >
          {part}
        </a>
      );
    }
    return part;
  });
};

export default Appendix;
