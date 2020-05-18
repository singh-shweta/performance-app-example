import React from "react";
// import SampleChart from "./chart";
import data from "./data.json";
import CardWithGraph from "./CardWithGraph";



const CardsList = (props) => {
  return data.map((cardData) => {
    return (
      <CardWithGraph data={cardData} />
    );
  });
};

export default CardsList;
