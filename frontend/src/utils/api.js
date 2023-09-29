class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._checkResponse = (res) => (res.ok ? res.json() : Promise.reject());
  }

  getInitialCards(token) {
    return fetch(`${this._url}/users/me`, {
      headers: {
        Authorization : `Bearer ${token}`
      },
    }).then(this._checkResponse);
  }

  getCards(token) {
    return fetch(`${this._url}/cards`, {
      headers: {
        Authorization : `Bearer ${token}`
      },
    }).then(this._checkResponse);
  }

  setUserInfo(name, about, token) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization : `Bearer ${token}`
      },
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(this._checkResponse);
  }

  addNewCard(data, token) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      },
      
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      })
    }).then(this._checkResponse);
  }

  

  addLikeCard(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        Authorization : `Bearer ${token}`
      },
    }).then(this._checkResponse);
  }

  deleteLikeCard(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        Authorization : `Bearer ${token}`
      },
    }).then(this._checkResponse);
  }

  setChangeAvatar(avatar, token) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization : `Bearer ${token}`
      },
      body: JSON.stringify({
        avatar: avatar,
      }),
    }).then(this._checkResponse);
  }

  deleteCard(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        Authorization : `Bearer ${token}`
      },
    }).then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl: 'http://localhost:3000'
});

export default api;
