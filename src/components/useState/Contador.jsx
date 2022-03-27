import React, { useState } from "react";

const Contador = () => {
  const [couter, setCouter] = useState(0);

  const incrementarApp = () => {
    setCouter(couter + 1);
    //actualizar estados muchas veces
    //guardamos el renderizado anterior mas el nuevo
    setCouter((prevCouter) => prevCouter + 1);
  };

  return (
    <div>
      <h2>Clicks:{couter}</h2>
      <button onClick={incrementarApp}>Incrementar</button>
    </div>
  );
};

export default Contador;
