import css from "./AddNewPages.module.css";

export default function AddNewPagesBtn({ addPage }) {
  return (
    <button onClick={() => addPage()} className={css.btn} type="button">
      More Films
    </button>
  );
}
