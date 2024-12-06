import React, { useState } from "react";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    const animalCards = document.querySelectorAll(".animal-card");

    animalCards.forEach((card) => {
      const animalName = card.querySelector(".card-title").textContent.toLowerCase();
      card.style.display = animalName.includes(searchTerm) ? "block" : "none";
    });
  };

  return (
    <div className="container my-4">
      <form className="d-flex justify-content-center" onSubmit={handleSearch}>
        <input
          id="animalSearchInput"
          className="form-control w-50 me-2"
          type="text"
          placeholder="Введите имя животного"
          aria-label="Поиск по животным"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          style={{ backgroundColor: "#FFFFF", color: "black" }}
        />
        <button className="btn btn-primary" type="submit">
          Поиск
        </button>
      </form>
    </div>
  );
}

export default Search;
