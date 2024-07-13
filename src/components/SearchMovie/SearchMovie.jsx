import { useState } from "react";
import css from "./SearchMovie.module.css";

export default function SearchMovie({ onSubmit }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") return;

    onSubmit({ text });

    setText("");
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        name="text"
        value={text}
        onChange={handleChange}
        placeholder="search film"
        required
      />
      <button className={css.btn} type="submit">
        Search
      </button>
    </form>
  );
}
