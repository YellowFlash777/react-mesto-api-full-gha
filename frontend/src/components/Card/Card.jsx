import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Card({ card, onCardClick, onCardDelete, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    setIsLike(card.likes.some((item) => item === currentUser._id));
  }, [card, currentUser]);

  return (
    <div className="element__wrapper">
      <div className="element__container">
        {currentUser._id === card.owner && (
          <button
            className="element__trash-icon"
            type="button"
            onClick={() => onCardDelete(card._id)}
          />
        )}
        <img
          src={card.link}
          alt={`Изображение ${card.name}`}
          className="element__image"
          onClick={() => onCardClick({ link: card.link, name: card.name })}
        />
        <div className="element__wrap">
          <h2 className="element__text">{card.name}</h2>
          <div className="element__like-container">
            <button
              className={`element__icon ${
                isLike ? "element__icon_active" : ""
              }`}
              type="button"
              onClick={() => onCardLike(card)}
            />
            <span className="element__like-counter">{card.likes.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
