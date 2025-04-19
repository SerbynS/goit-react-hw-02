import css from "./Description.module.css";

export default function Description({ title, content }) {
  return (
    <>
      <h1 className={css.title}>{title}</h1>
      <p>{content}</p>
    </>
  );
}
