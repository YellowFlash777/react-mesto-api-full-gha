const baseUrl = 'https://api.mesto-69.gamzat.nomoredomainsrocks.ru';

function getResponse(res) {
   return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

export function getUser(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${token}`,
    }
  }).then((res) => getResponse(res));
};


export function register (password, email)  {
  return fetch(`${baseUrl}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password,
      email,
    })
  })
  .then((res) => getResponse(res));
};

export function authorization(password, email) {
  return fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password,
      email,
    })
  }).then((res) => getResponse(res));
};




