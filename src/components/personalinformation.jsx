import React from "react";
import Video from "../video/WIN_20241127_18_06_37_Pro.mp4";
import Owl from "../images/i.webp";
import Cat from "../images/кошка.jpg";

function PersonalInformation() {
  // Данные пользователя
  const user = {
    name: "Мирон Загорулько",
    email: "mironzagorulko9@gmail.com",
    registrationDate: "2023-10-15",
    daysSinceRegistration: 45,
  };

  // Список найденных животных
  const animals = [
    {
      id: 10,
      image: Owl,
      title: "Сова",
      description: "Сова на дереве.",
      chipNumber: "go-211-spb",
      area: "Центральный",
      date: "11-12-2022",
    },
    {
      id: 14,
      image: Cat,
      title: "Кошка",
      description: "Потерялась пушистая кошка. Очень ласковая, серая.",
      chipNumber: "ca-001-spb",
      area: "Василеостровский",
      date: "24-03-2020",
    },
  ];

  // Обработчики кнопок
  const handleLogout = () => {
    alert("Выход из аккаунта");
  };

  const handleEdit = (id) => {
    alert(`Редактирование животного с id: ${id}`);
  };

  const handleDelete = (id) => {
    alert(`Удаление животного с id: ${id}`);
  };

  return (
    <div>
      <div className="container">
        {/* Заголовок личного кабинета */}
        <h1>Добро пожаловать в Личный кабинет!</h1>
        {/* Карточка с данными пользователя */}
        <div className="card">
          {/* Видео вместо фото */}
          <div className="user-photo">
            <video autoPlay loop muted>
              <source src={Video} type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
          </div>
          <h3>Информация о пользователе</h3>
          <p>
            <strong>Имя:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Дата регистрации:</strong> {user.registrationDate}
          </p>
          <p>
            <strong>Количество дней с регистрации:</strong>{" "}
            {user.daysSinceRegistration}
          </p>
          <button className="logout-btn" onClick={handleLogout}>
            Выйти
          </button>
        </div>

        <h1>Найденные животные</h1>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {animals.map((animal) => (
            <div
              key={animal.id}
              className="card m-3"
              style={{
                width: "18rem",
                borderRadius: 15,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={animal.image}
                className="card-img-top"
                alt={`Рисунок ${animal.title}`}
                style={{
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                  objectFit: "cover",
                  height: 200,
                }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center text-primary">
                  {animal.title}
                </h5>
                <p
                  className="card-text text-muted"
                  style={{ fontSize: "0.9rem" }}
                >
                  {animal.description}
                </p>
                <ul className="list-unstyled flex-grow-1">
                  <li>
                    <strong>id:</strong> {animal.id}
                  </li>
                  <li>
                    <strong>Номер чипа:</strong> {animal.chipNumber}
                  </li>
                  <li>
                    <strong>Район:</strong> {animal.area}
                  </li>
                  <li>
                    <strong>Дата:</strong> {animal.date}
                  </li>
                </ul>
                <button
                  className="btn btn-primary w-100 mt-auto"
                  style={{ borderRadius: 10 }}
                  onClick={() => handleEdit(animal.id)}
                >
                  Редактировать
                </button>
                <br />
                <button
                  className="btn btn-primary w-100 mt-auto"
                  style={{
                    backgroundColor: "red",
                    borderRadius: 10,
                    borderColor: "red",
                  }}
                  onClick={() => handleDelete(animal.id)}
                >
                  Удалить
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Ошибка авторизации - скрыта по умолчанию */}
      <div className="error-message" id="error-message">
        Ошибка: доступ запрещен. Пожалуйста, войдите в свой аккаунт.
      </div>
    </div>
  );
}

export default PersonalInformation;
