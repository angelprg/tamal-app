import React, { useState } from "react";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle/CardTitle";

const Card = ({ title = "Sin Título", imgUrl, price=20 }) => {


  return (
    <div className="card" style={{ width: "18rem" }}>
      <CardImage imgUrl={imgUrl} />
      <div className="card-body">
        <CardTitle title={title} />
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Card;
