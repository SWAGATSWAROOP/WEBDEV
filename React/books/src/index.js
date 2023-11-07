import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Info1 = {
  title: "Cryptocurrency: Bitcoin & Blockchain: 4 Books in 1 Cryptocurrency",
  author: "Swagat",
  image: "https://m.media-amazon.com/images/I/418118R+a9L._SY445_SX342_.jpg",
};

const Info2 = {
  title:
    "Coding for Kids: Python & Blockchain Programming : A Beginners Guide for Future App Developers - 100+ Activities (2 in 1 C...",
  author: "Elliot Davis ",
  image:
    "https://m.media-amazon.com/images/I/81aStir06GL._AC_UY436_FMwebp_QL65_.jpg",
};

const Info3 = {
  title: "Cryptocurrency",
  author: "Aryan",
  image:
    "https://m.media-amazon.com/images/I/91eoDgHV6WL._AC_UY436_FMwebp_QL65_.jpg",
};

const Info4 = {
  title: "AWS",
  author: "Swagat",
  image:
    "https://m.media-amazon.com/images/I/61isV+qaN0L._AC_UY436_FMwebp_QL65_.jpg",
};

const Root = () => {
  return (
    <section className="bookList">
      <Image Object={Info1}></Image>
      <Image Object={Info2} award="5 start excellence"></Image>
      <Image Object={Info3}></Image>
      <Image Object={Info4}></Image>
    </section>
  );
};

const Image = (props) => {
  // Object destructuring
  const { title, author, image } = props.Object;
  return (
    <div className="Books">
      <h1>{title}</h1>
      <h5>{author}</h5>
      <img src={image} alt="" />
      {/* Using Props */}
      <p>{props.title}</p>
      <h1>{props.award}</h1>
    </div>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
