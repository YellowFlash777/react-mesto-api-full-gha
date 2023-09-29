export default function ImagePopup ({ card, isOpen, onClose}) {
  return (
    <div className= {`popup popup-image ${isOpen && 'popup_opened'}`} onClick={onClose}>
      <div className="popup-image__container" onClick={(evt) => evt.stopPropagation()}> 
        <button className="popup__close-button" type="button" onClick={onClose} />
        <figure className="popup-image__card">
          <img src={card.link} alt={`Изображение ${card.name}`} className="popup-image__zoom" />
          <figcaption className="popup-image__caption">{card.name}</figcaption>
        </figure>
      </div>
    </div>
  )
}