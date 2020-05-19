import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { id: 1, title: "A Batalha do Apocalipse" },
    { id: 2, title: "A Pirâmide Vermelha" },
    { id: 3, title: "Mago: Aprendiz" },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
