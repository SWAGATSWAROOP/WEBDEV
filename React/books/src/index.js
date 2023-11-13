import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Info = [
  {
    id: 1,
    title: "Cryptocurrency: Bitcoin & Blockchain: 4 Books in 1 Cryptocurrency",
    author: "Swagat",
    image: "https://m.media-amazon.com/images/I/418118R+a9L._SY445_SX342_.jpg",
  },
  {
    id: 2,
    title:
      "Coding for Kids: Python & Blockchain Programming : A Beginners Guide for Future App Developers - 100+ Activities (2 in 1 C...",
    author: "Elliot Davis ",
    image:
      "https://m.media-amazon.com/images/I/81aStir06GL._AC_UY436_FMwebp_QL65_.jpg",
  },
  {
    id: 3,
    title: "Cryptocurrency",
    author: "Aryan",
    image:
      "https://m.media-amazon.com/images/I/91eoDgHV6WL._AC_UY436_FMwebp_QL65_.jpg",
  },
  {
    id: 4,
    title: "AWS",
    author: "Swagat",
    image:
      "https://m.media-amazon.com/images/I/61isV+qaN0L._AC_UY436_FMwebp_QL65_.jpg",
  },
];

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

const Image = (props) => {
  // Object destructuring
  //After using the spread operator we dont need have to specify the object name passed
  const { title, author, image } = props;
  const children = props.children;
  return (
    <div className="Books">
      <h1>{title}</h1>
      <h5>{author}</h5>
      <img src={image} alt="" />
      {/* Using Props */}
      <p>{props.title}</p>
      <h1>{props.award}</h1>
      {/* Passing the children */}
      {/* Child Can Be accesed only with Children Name */}
      <h1>{children}</h1>
    </div>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
