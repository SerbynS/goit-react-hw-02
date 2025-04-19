import css from "./Options.module.css";

export default function Options({
  onLeaveFeedback,
  totalFeedBack,
  onResetFeedback,
}) {
  return (
    <>
      <button className={css.btn} onClick={() => onLeaveFeedback("good")}>
        Good
      </button>
      <button className={css.btn} onClick={() => onLeaveFeedback("neutral")}>
        Neutral
      </button>
      <button className={css.btn} onClick={() => onLeaveFeedback("bad")}>
        Bad
      </button>

      {totalFeedBack > 0 && (
        <button className={css.btn} onClick={onResetFeedback}>
          Reset
        </button>
      )}
    </>
  );
}
