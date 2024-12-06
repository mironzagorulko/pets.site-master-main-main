import React from "react";
import Dog from "../images/собака.jpg";
import Mouse from "../images/мышь.jpg";
import Gorilla from "../images/gorilla.webp";

const animals = [
  {
    image: Dog,
    name: "Собака",
    title: "Найдена собака",
    description: "Собака рыжая, была утеряна в Красногвардейчком районе.",
  },
  {
    image: Mouse,
    name: "Мышь",
    title: "Найдена мышь",
    description: "Мышь серая, была утеряна в Центральном районе.",
  },
  {
    image: Gorilla,
    name: "Горилла",
    title: "Найдена горилла",
    description: "Горилла, была утеряна в Красногвардейчком районе.",
  },
];

function Slider({ animals }) {
  return (
    <main style={{ paddingBottom: 0 }}>
      <h2
        className="text-center text-white bg-primary mb-0 p-2 rounded"
        style={{ margin: 0 }}
      >
        Найденные животные
      </h2>
      <div
        id="carouselExampleIndicators"
        className="carousel slide m-auto bg-light w-75 p-3 rounded shadow-lg"
        data-bs-ride="carousel"
        style={{ marginBottom: 0 }}
      >
        <div className="carousel-indicators">
          {animals.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="carousel-inner">
          {animals.map((animal, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={animal.image}
                className="d-block"
                alt={animal.name}
                style={{
                  width: "100%",
                  maxHeight: 400,
                  objectFit: "cover",
                }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
                <h5 className="text-light">{animal.title}</h5>
                <p className="text-light">{animal.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          style={{ marginBottom: 0 }}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Предыдущий</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
          style={{ marginBottom: 0 }}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Следующий</span>
        </button>
      </div>
    </main>
  );
}

export default function App() {
  return <Slider animals={animals} />;
}
