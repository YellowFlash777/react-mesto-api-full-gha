import React from "react";
import Successful from "../../images/successfulreg.svg";
import UnSuccessful from "../../images/errorreg.svg";

export default function InfoTooltip({
  effect: { isOpen, isSucessfull, },
  onClose,
}) {
  return (
    <section className={`popup popup-registr ${isOpen && "popup_opened"}`}>
      <div className="popup__container popup__container_type_padding">
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}
        />
        <div className="popup__result-registr">
          <img
            className="popup-registr__img"
            src={isSucessfull ? Successful : UnSuccessful}
            alt="Результат регистрации"
          />
          <h2 className="popup__title popup__title_padding">
            {isSucessfull
              ? "Вы успешно зарегистрировались!"
              : "Что-то пошло не так! Попробуйте ещё раз."}
          </h2>
        </div>
      </div>
    </section>
  );
}
