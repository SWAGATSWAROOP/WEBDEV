import React from "react";

const Datarender = ({ image, title, description }) => {
  return (
    <div className="file">
      <h1>{title}</h1>
      <img src={image} alt="" />
      <p>{description}</p>
    </div>
  );
};

export default Datarender;
