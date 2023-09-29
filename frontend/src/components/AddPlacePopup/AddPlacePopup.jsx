import { useState, useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("#");

  useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({
       name,
       link,
    });
  }
 
  const handleChangeName = e => {
       setName(e.target.value);
  }
  
  const handleChangeLink = e => {
      setLink(e.target.value);
  }
  

  return (
    <PopupWithForm
      name="addcard"
      title="Новое место"
      titleButton="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__form-field">
        <input
          className="popup__form-input popup__form-input_type_title"
          type="text"
          placeholder="Название"
          name="title"
          id="title"
          minLength={2}
          maxLength={30}
          required=""
          value={name || ''}
          onChange={handleChangeName}
        />
        <span className="popup__error popup__error_type_title" />
      </label>
      <label className="popup__form-field">
        <input
          className="popup__form-input popup__form-input_type_url"
          type="url"
          placeholder="Ссылка на картинку"
          name="link"
          id="link"
          required=""
          value={link || ''}
          onChange={handleChangeLink}
        />
        <span className="popup__error popup__error_type_link" />
      </label>
    </PopupWithForm>
  );
}
