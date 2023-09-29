import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function EditDeletePopup({ isOpen, onClose, onSubmit, card }) {
  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(card);
  }

  return (
    <PopupWithForm
      name="deletecard"
      title="Вы уверены?"
      titleButton="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    ></PopupWithForm>
  );
}
