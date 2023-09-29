export default function PopupWithForm({
  name,
  title,
  titleButton,
  children,
  isOpen,
  onClose,
  onSubmit,
}) {
  return (
    <div
      className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}
      onClick={onClose}
    >
      <div className="popup__container" onClick={(evt) => evt.stopPropagation()}>
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <form
          action="#"
          className="popup__form"
          method="post"
          noValidate
          name={name}
          onSubmit={onSubmit}
        >
          <h2
            className={`popup__edit-profile ${
              name === "deletecard" ? "popup__edit-profile_delete" : ""
            }`}
          >
            {title}
          </h2>
          {children}
          <button className="popup__save-button" type="submit">
            {titleButton || "Сохранить"}
          </button>
        </form>
      </div>
    </div>
  );
}
