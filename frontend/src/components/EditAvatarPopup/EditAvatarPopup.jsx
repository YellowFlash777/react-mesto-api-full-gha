import { useRef } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
}) {
  const avatarRef = useRef();
  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="avatarcard"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__form-field popup__form-field_avatar">
        <input
          className="popup__form-input popup__form-input_type_url"
          type="url"
          placeholder="Ссылка на картинку"
          name="avatar"
          id="avatar"
          required=""
          ref={avatarRef}
        />
        <span className="popup__error popup__error_type_avatar" />
      </label>
    </PopupWithForm>
  );
}
