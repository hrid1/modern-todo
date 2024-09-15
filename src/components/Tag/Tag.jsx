const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d5c8" },
    JavaScript: { backgroundColor: "#ffd12c" },
    React: { backgroundColor: "#4cdafd" },
    default: { backgroundColor: "#fafafa" },
  };

  return (
    <div>
      <button
        type="button"
        style={selected ? tagStyle[tagName] : tagStyle.default}
        onClick={() => selectTag(tagName)}
        className="btn px-1 rounded-[4px]  border"
      >
        {tagName}
      </button>
    </div>
  );
};

export default Tag;
