import React from "react";
import ReactDOM from "react-dom";

const Root = () => {
  return (
    <>
      <Image />
      <Author />
      <Title />
    </>
  );
};

const Image = () => {
  return (
    <img src="https://m.media-amazon.com/images/I/21Uxhb8lwYL.css?AUIClients/DetailPageABSMultiSelectionAssets&2VQcpB0s#desktop.542412-T1"></img>
  );
};

const Title = () => {
  return (
    <h1>Cryptocurrency: Bitcoin & Blockchain: 4 Books in 1 Cryptocurrency</h1>
  );
};

const Author = () => {
  return <h2>Keizer Söze</h2>;
};

ReactDOM.render(<Root />, document.getElementById("root"));
