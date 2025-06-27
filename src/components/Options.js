function Options({ option }) {
  return (
    <button className="btn btn-option" key={option}>
      {option}
    </button>
  );
}
export default Options;
