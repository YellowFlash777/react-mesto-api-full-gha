import Card from "../Card/Card";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Main({
  onEditProfile,
  onEditAvatar,
  onAddPlace,
  onCardClick,
  onCardDelete,
  onCardLike,
  cards,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <button className="profile__avatar-btn" onClick={onEditAvatar}>
            <img
              src={currentUser.avatar}
              alt="аватар профиля"
              className="profile__image"
            />
          </button>
          <div className="profile__wrapper">
            <div className="profile__wrap">
              <h1 className="profile__title profile__title-name">
                {currentUser.name}
              </h1>
              <button
                className="profile__edit-button"
                type="button"
                onClick={onEditProfile}
              />
            </div>
            <p className="profile__text profile__text-job">
              {currentUser.about}
            </p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        />
      </section>
      <section className="element">
        <div className="element__lists">
          {cards.map((data) => {
            return (
              <div className="element__wrapper" key={data._id}>
                <Card
                  card={data}
                  onCardClick={onCardClick}
                  onCardDelete={onCardDelete}
                  onCardLike={onCardLike}
                />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
