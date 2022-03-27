import React, { useState } from "react";

const CondicionApp = () => {
  const [condicion, setCondicion] = useState(false);

  return (
    <>
      <button onClick={() => setCondicion(!condicion)}>Visualizar</button>

      {/*{condicion ? (
        <h1> Visualizacion condicional verdadera </h1>
      ) : (
        <h1> vizualizacion Condicional en falso </h1>
      )}*/}

      {/*{condicion ? <h1> Visualizacion condicional verdadera </h1> : null}*/}

      {condicion && (
        <h1> Visualizacion condicional verdadera {condicion.toString()} </h1>
      )}
    </>
  );
};

export default CondicionApp;
