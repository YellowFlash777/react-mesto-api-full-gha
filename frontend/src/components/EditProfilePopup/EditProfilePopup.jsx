import { useContext, useEffect, useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";


export default function EditProfilePopup({ isOpen, onClose, onUpdateUser}) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [about, setAbout] = useState('')  
 
 
  useEffect(() => {
    setName(currentUser.name)
    setAbout(currentUser.about)
  }, [currentUser, isOpen])

  function handleSubmit(evt) {
    evt.preventDefault()
    onUpdateUser({
     name,
     about
  })}
  const handleChangeNameProfile = e => {
    setName(e.target.value);
}

const handleChangeDescription = e => {
   setAbout(e.target.value);
}

  return (
    <PopupWithForm
    name="edit-profile"
    title="Редактировать профиль"
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}
  >
    <label className="popup__form-field">
      <input
        className="popup__form-input popup__form-input_type_name"
        type="text"
        placeholder="Имя"
        name="name"
        id="name"
        required=""
        minLength={2}
        maxLength={40}
        value={name || ''} 
        onChange={handleChangeNameProfile}
      />
      <span className="popup__error popup__error_type_name" />
    </label>
    <label className="popup__form-field">
      <input
        className="popup__form-input popup__form-input_type_description"
        type="text"
        placeholder="О себе"
        name="description"
        id="description"
        required=""
        minLength={2}
        maxLength={200}
        value={about || ''}
        onChange={handleChangeDescription}
      />
      <span className="popup__error popup__error_type_description" />
    </label>
  </PopupWithForm>
  )
} 