import css from "./Options.module.css";

export default function Options({ onLeaveFeedback, totalFeedBack }) {
  return (
    <>
      <button onClick={() => onLeaveFeedback("good")}>Good</button>
      <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
      <button onClick={() => onLeaveFeedback("bad")}>Bad</button>

      {totalFeedBack > 0 && <button>Reset</button>}
    </>
  );
}
