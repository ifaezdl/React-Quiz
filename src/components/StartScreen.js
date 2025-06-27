function StartScreen({ number, dispatch }) {
  return (
    <div>
      <h2>Welcome to The React Quiz</h2>
      <h3>{number} question to test your React Mastery!</h3>
      <button
        onClick={() => dispatch({ type: "Start" })}
        className="btn btn-ui"
      >
        Lets Start
      </button>
    </div>
  );
}

export default StartScreen;
