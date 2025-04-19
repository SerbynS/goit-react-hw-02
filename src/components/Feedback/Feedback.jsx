import css from "./Feedback.module.css";

export default function Feedback({
  values: { good, neutral, bad },
  totalFeedback,
}) {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {Math.round((good / totalFeedback) * 100)}%</p>
    </>
  );
}
