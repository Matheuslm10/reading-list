import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  return books.length ? (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} background={ theme.ui }/>;
        })}
      </ul>
    </div>
  ) : (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      Nenhum livro para ler por aqui.
    </div>
  );
};

export default BookList;
