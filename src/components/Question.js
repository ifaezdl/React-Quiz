import Options from "./Options";

export default function Question({ question }) {
  debugger;
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((option) => (
          <Options option={option} />
        ))}
      </div>
    </div>
  );
}
