import React from "react";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle/CardTitle";
import CardBody from "./CardBody";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";

const Card = ({ title = "Sin Título", imgUrl, text, linkBtn, oferta=false }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <CardImage imgUrl={imgUrl} />
      <div className="card-body">
        <CardTitle title={title} oferta={oferta} />
        <CardBody text={text} />
        <PrimaryButton link={linkBtn} text="Comprar" />
      </div>
    </div>
  );
};

export default Card;
