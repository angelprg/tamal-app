import React, { useState } from "react";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle/CardTitle";
import CardBody from "./CardBody";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";

const Card = ({ title = "Sin Título", imgUrl, text, linkBtn, oferta=false, precio=20 }) => {

  const [oaxaqueno, setOaxaqueno] = useState(false)

  const precioFinal = precio + (oaxaqueno ? 10 : 0)
  return (
    <div className="card" style={{ width: "18rem" }}>
      <CardImage imgUrl={imgUrl} />
      <div className="card-body">
        <CardTitle title={title} oferta={oferta} />
        <p>{precioFinal}</p>
        <button onClick={()=>setOaxaqueno(false)}>Hoja de Maiz</button>
        <button onClick={()=>setOaxaqueno(true)}>Hoja de plátano</button>
        <CardBody text={text} />
        <PrimaryButton link={linkBtn} text="Comprar" />
      </div>
    </div>
  );
};

export default Card;
