import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>Sorry, page not found</p>;
    </div>
  );
}
