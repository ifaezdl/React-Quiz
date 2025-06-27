import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
const initialState = {
  questions: [],
  //loading,error,ready,finished
  status: "loading",
  index: 0,
};
function reducer(state, action) {
  debugger;
  switch (action.type) {
    case "dataRecived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, state: "error" };
    case "Start":
      return { ...state, state: "active" };
    default:
      throw new Error("Action unknown");
  }
}
export default function App() {
  const [{ questions, status, index }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const numQuestions = questions.length;
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "ready" && (
          <StartScreen number={numQuestions} dispatch={dispatch} />
        )}
        {status === "error" && <Error />}
        {status === "active" && <Question question={questions[index]} />}
      </Main>
    </div>
  );
}
