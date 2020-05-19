import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const NewBookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (el) => {
    el.preventDefault();
    dispatch({
      type: "ADD_BOOK",
      book: {
        title,
        author,
      },
    });
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(el) => setTitle(el.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Autor"
        value={author}
        onChange={(el) => setAuthor(el.target.value)}
        required
      />
      <input type="submit" value="Adicionar Livro" />
    </form>
  );
};

export default NewBookForm;
