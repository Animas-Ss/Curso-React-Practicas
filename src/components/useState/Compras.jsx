import React, { useState } from "react";

const inicialCarrito = [
  {
    id: 1,
    titulo: "JavaScript",
    descripcion: "lo mejor de mi",
  },
  {
    id: 2,
    titulo: "react",
    descripcion: "lo mejor que progreamacion",
  },
  {
    id: 3,
    titulo: "MongoDB",
    descripcion: "la mejor base de datos no relacional",
  },
];

const Compras = () => {
  const [carrito, setCarrito] = useState(inicialCarrito);

  const eliminarProducto = (productoID) => {
    const deleteP = carrito.filter((producto) => producto.id !== productoID);
    setCarrito(deleteP);
  };

  const agregarProducto = (nuevoProducto) => {
    nuevoProducto.id = Date.now();

    const agregarP = [nuevoProducto, ...carrito];

    setCarrito(agregarP);
  };

  const editarProducto = (editar) => {
    const CambioP = carrito.map((producto) =>
      producto.id === editar.id ? editar : producto
    );

    setCarrito(CambioP);
  };

  return (
    <div>
      <button
        onClick={() =>
          agregarProducto({
            titulo: "programa",
            descripcion: "mi interes siempre",
          })
        }
      >
        Agregar
      </button>
      <button
        onClick={() =>
          editarProducto({
            id: 1,
            titulo: "Express",
            descripcion: "Backend",
          })
        }
      >
        Editar
      </button>
      <button onClick={() => eliminarProducto(2)}>Eliminar</button>
      {carrito.map((producto) => (
        <div key={producto.id}>
          <h2>
            {producto.id}
            {producto.titulo}
          </h2>
          <p>{producto.descripcion}</p>
          <button onClick={() => eliminarProducto(producto.id)}>
            Eliminar
          </button>
          <button
            onClick={() =>
              editarProducto({
                id: producto.id,
                titulo: "Express",
                descripcion: "Backend",
              })
            }
          >
            Editar
          </button>
        </div>
      ))}
      <pre>{JSON.stringify(carrito, null, 2)}</pre>
    </div>
  );
};

export default Compras;
