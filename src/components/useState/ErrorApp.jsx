import React, { useState } from "react";

const ErrorApp = () => {
  const [error, setError] = useState("");

  return (
    <div>
      <button onClick={() => setError("Error al traer datos de la aplicacion")}>
        Error
      </button>
      <button onClick={() => setError("Error en credienciales")}>
        Error credenciales
      </button>
      <button onClick={() => setError("")}>Proceso Exitoso</button>
      {/*error condicional cada boton tiene su poceso de ser exitoso el estado no muestra anda sino renderiza el estado de cada boton dependiendo el error */}
      {error && <h1>{error}</h1>}
    </div>
  );
};

export default ErrorApp;
