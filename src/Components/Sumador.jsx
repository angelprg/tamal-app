// import React, { useEffect, useState } from "react";

const Sumador = () => {

  const agregarAtoleFake = () => {
    fetch("https://api-cafe-tamales.herokuapp.com/api/atoles/619f0899536678b416b6b8ff", {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: "Atole de Piñón",
        img: "https://assets.unileversolutions.com/recipes-v2/125378.jpg?imwidth=900",
        price: '50',
      })
    })
  }
  // useEffect(agregarAtoleFake,[])



  // const [planets, setPlanets] = useState([]);
  // console.log("Iniciando / Actualizando componente Sumador");

  // useEffect(() => {
  //   console.log("Ejecutando algo en useEffect");
  //   const abortController = new AbortController();
  //   fetch("https://swapi.dev/aaapi/planets", { signal: abortController.signal })
  //     .then((result) => result.json())
  //     .then((data) => setPlanets(data.results))
  //     .catch((error) => {
  //       if (abortController.signal.aborted){
  //         console.log('error controlado')
  //       }
  //       else{
  //         console.log('mostrar en un div:')
  //         console.log(error)
  //       }
  //     });
  //   return () => {
  //     console.log("Función limpiadora");
  //     abortController.abort();
  //   };
  // }, []);

  return (
    <div>
      {/* <h2>Planetas StarWars</h2>
      {planets.map((planet) => (
        <h3 key={planet.name}>{planet.name}</h3>
      ))} */}
      <h1>Hola Koders!</h1>
    </div>
  );
};

export default Sumador;
