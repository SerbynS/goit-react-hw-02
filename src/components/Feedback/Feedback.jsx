import css from "./Feedback.module.css";

export default function Feedback({
  values: { good, neutral, bad },
  totalFeedback,
}) {
  return (
    <>
      <p className={css.values}>Good: {good}</p>
      <p className={css.values}>Neutral: {neutral}</p>
      <p className={css.values}>Bad: {bad}</p>
      <p className={css.values}>Total: {totalFeedback}</p>
      <p>Positive: {Math.round((good / totalFeedback) * 100)}%</p>
    </>
  );
}
