import React from "react";
import Data from "./pcgamedata";

const Datarender = ({ title, publisher, platform, image }) => {
  return (
    <>
      <h1>{title}</h1>
      <span>The Publisher of the game is {publisher}.</span>
      <br />
      <span>Platforms Supported : {platform}</span>
      <br />
      <img src={image} alt="" />
    </>
  );
};

const PcGames = () => {
  return (
    <>
      {Data.map((game) => {
        return <Datarender key={game.id}{...game}></Datarender>;
      })}
    </>
  );
};

export default PcGames;
