import css from "./Description.module.css";

export default function Description({ title, content }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{content}</p>
    </>
  );
}
