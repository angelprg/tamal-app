import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "./Tamales.module.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Tamales = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(
    () => {

      let elComponenteExiste = true

    fetch("https://api-cafe-tamales.herokuapp.com/api/tamales").then(
      (result) =>
        result.json().then((data) => {
          if (elComponenteExiste){
            setItems(data.tamal);
          }
        })
    ).catch(() => {
      setError(true)
    }).finally(()=> setLoading(false));

    return () => {
      elComponenteExiste = false
    }
  }
  
  , []);

  if (loading)
    return <Loader type="Puff" color="#00BFFF" height={100} width={100} />;

  if (error)
    return (
      <div className="alert alert-danger">
        Error al obtener los datos. Por favor, intentar nuevamente
      </div>
    );


  return (
    <div className={styles.section}>
      {items.map((item) => {
        const { _id, img, name, price } = item;
        return <Card key={_id} title={name} imgUrl={img} price={price} />;
      })}
    </div>
  );
};

export default Tamales;
