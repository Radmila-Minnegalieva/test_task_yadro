import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import active_svg from "../images/active_chat.svg";
import like from "../images/like.svg";
import filllike from "../images/filllike.svg";
import smile from "../images/smile.svg";

const initialMessages = [
  {
    id: 1,
    author: "Женя",
    text: "Какое-то сообщение длиннее, чем 1 строка",
    likes: 552,
    liked: false,
  },
  { id: 2, author: "Олег", text: "Привет всем!", likes: 7, liked: false },
  { id: 3, author: "Аня", text: "Как дела?", likes: 23, liked: false },
  {
    id: 4,
    author: "Дима",
    text: "У кого-нибудь есть новые идеи для проекта?",
    likes: 5,
    liked: false,
  },
  {
    id: 5,
    author: "Ирина",
    text: "Всем привет, рада вас видеть!",
    likes: 18,
    liked: false,
  },
  {
    id: 6,
    author: "Максим",
    text: "Кто идет на конференцию завтра?",
    likes: 10,
    liked: false,
  },
  {
    id: 7,
    author: "Лена",
    text: "Доброе утро! Как прошли выходные?",
    likes: 12,
    liked: false,
  },
  {
    id: 8,
    author: "Женя",
    text: "Спасибо за отличные идеи на прошлой встрече!",
    likes: 8,
    liked: false,
  },
  {
    id: 9,
    author: "Олег",
    text: "Есть ли новости по проекту?",
    likes: 4,
    liked: false,
  },
  {
    id: 10,
    author: "Аня",
    text: "Кто может помочь с задачей на выходных?",
    likes: 9,
    liked: false,
  },
];

const Chat = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [showForm, setShowForm] = useState(false);
  const [newMessageText, setNewMessageText] = useState("");

  const handleLikeClick = (id) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        message.id === id
          ? {
              ...message,
              likes: message.liked ? message.likes - 1 : message.likes + 1,
              liked: !message.liked,
            }
          : message
      )
    );
  };

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleFormChange = (e) => {
    setNewMessageText(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newMessageText.trim()) {
      const newMessage = {
        id: messages.length + 1,
        author: "Нина", 
        text: newMessageText,
        likes: 0,
        liked: false,
      };
      setMessages([...messages, newMessage]);
      setNewMessageText("");
      setShowForm(false);
    }
  };

  return (
    <div className="translation__chat">
      <div className="translation__chat_navlinks">
        <div className="translation__chat_navlinks_chat">
          <NavLink className="translation__chat_navlink" id="translation__chat_navlink1">
            Чат
          </NavLink>
          <img src={active_svg} alt="active" />
        </div>
        <NavLink className="translation__chat_navlink">Вопрос / ответ</NavLink>
      </div>
      <div className="translation__chat_messages">
        {messages.map((message) => (
          <div key={message.id} className="translation__chat_messages_message">
            <div className="translation__chat_messages_message_text">
              <p id={`translation__chat_messages_message_text1`}>{message.author}</p>
              <p id={`translation__chat_messages_message_text2`}>{message.text}</p>
            </div>
            <div className="translation__chat_messages_message_likes">
              <img
                src={message.liked ? filllike : like}
                alt="like"
                onClick={() => handleLikeClick(message.id)}
                style={{ cursor: "pointer" }}
              />
              <div
                className={`translation__chat_messages_message_likes_text ${
                  message.liked ? "liked-text" : ""
                }`}
              >
                <p>{message.likes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showForm && (
        <div className="translation__chat_form">
          <div className="translation__chat_form_two">
            <form onSubmit={handleFormSubmit}>
              <textarea
                placeholder="Текст"
                required
                value={newMessageText}
                onChange={handleFormChange}
              ></textarea>
              <div className="translation__chat_form_img">
                <img src={smile} alt="smile" />
              </div>
              <button type="submit" style={{ display: "none" }} />
            </form>
            <NavLink
              className="translation__chat_form_navlink"
              onClick={handleFormSubmit}
            >
              Отправить
            </NavLink>
          </div>
          <div className="translation__chat_form_text">
            <div className="translation__chat_form_text_name">
              <p>Имя в чате:</p>
              <p>Нина</p>
            </div>
            <p>Ред.</p>
          </div>
        </div>
      )}
      {!showForm && (
        <NavLink className="translation__chat_button" onClick={handleButtonClick}>
          <p>Хотите отправить сообщение?</p>
          <p>Кликните на эту кнопку</p>
        </NavLink>
      )}
    </div>
  );
};

export default Chat;