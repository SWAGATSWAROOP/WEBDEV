import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Info = {
  title: "Cryptocurrency: Bitcoin & Blockchain: 4 Books in 1 Cryptocurrency",
  author: "Swagat",
  image: "https://m.media-amazon.com/images/I/418118R+a9L._SY445_SX342_.jpg",
};

const Root = () => {
  return (
    <section className="bookList">
      <Image title="Swagat"></Image>
      <Image title="Munu" award="5 start excellence"></Image>
      <Image title="Aryan"></Image>
      <Image title="Litan Mamu"></Image>
    </section>
  );
};

const Image = (props) => {
  return (
    <div className="Books">
      <h1>{Info.title}</h1>
      <h5>{Info.author}</h5>
      <img src={Info.image} alt="" />
      {/* Using Props */}
      <p>{props.title}</p>
      <h1>{props.award}</h1>
    </div>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
