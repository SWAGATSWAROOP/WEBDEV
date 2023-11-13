import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Image from "./components/Image";
import {Info} from "./components/Info";

// const names = ["Swagat", "Aryan", "Munu", "Sanu"];

// const newNames = names.map((name) => {
//   return <h2>{name}</h2>;
// });

const Root = () => {
  return (
    <section className="bookList">
      {Info.map((book) => {
        // return <Image key={book.id} book={book}></Image>;
        // Similar using spread opreator
        return <Image key={book.id} {...book}></Image>;
      })}
    </section>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
