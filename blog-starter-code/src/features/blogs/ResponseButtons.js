const responseEmoji = {
  like: "👍",
  unlike: "👎",
};

const ResponseButtons = () => {
  const responseButtons = Object.entries(responseEmoji).map(([name, emoji]) => {
    return (
      <button key={name} type="button" className="btn btn-light mx-2">
        {emoji}
      </button>
    );
  });

  return <div>{responseButtons}</div>;
};
export default ResponseButtons;
