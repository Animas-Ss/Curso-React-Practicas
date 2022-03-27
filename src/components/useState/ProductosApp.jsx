import React, { useState } from "react";

// inicializamos el estado creando una variable con la informacion

const inicialProductos = {
  titulo: "titulo",
  descripcion: "tarea asignada",
  /*imagen: {
    chica: "chicha",
    mediana: "mediana",
    grande: "grande",
  },*/
};

const ProductosApp = () => {
  const [productos, setProductos] = useState(inicialProductos);

  // se pasa como property la propuedad que seria el nombre y value como el valor a cambiar

  const handleClick = (property, value) => {
    setProductos({
      ...productos, //copia del objeto de estado
      [property]: value, // se llama entre corchetes apra hacerla variable
    });
  };

  return (
    <div>
      <div>
        <button onClick={() => handleClick("titulo", "Nuevo Titulo")}>
          Actualizar titulo
        </button>
        <button onClick={() => handleClick("descripcion", "Nuevo descripcion")}>
          Actualizar descripcion
        </button>
      </div>

      <h1>{productos.titulo}</h1>
      <p>{productos.descripcion}</p>
      {/*<img src={productos.imagen?.mediana} alt="productos" />*/}

      <pre>{JSON.stringify(productos, null, 2)}</pre>
    </div>
  );
};

export default ProductosApp;
