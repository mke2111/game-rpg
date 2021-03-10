import 'regenerator-runtime';

const fetch = require('node-fetch');

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUfun/scores/';

export const sendData = async (name, score) => {
  const playerScore = {
    user: name,
    score,
  };

  const postData = {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'Application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(playerScore),
  };

  const postRequest = await fetch(url, postData);
  const data = await postRequest.json();
  return data;
};

export const retrieveData = async () => {
  const getData = {
    method: 'Get',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  const getRequest = await fetch(url, getData);
  const data = await getRequest.json();

  return data.result;
};

// export const postScore = (score, baseURL, gameID) => {
//   fetch(`${baseURL}/games/${gameID}/scores/`, {
//     mode: 'cors',
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(score),
//   });
// };

// const getScores = (baseURL, gameID) => fetch(`${baseURL}/games/${gameID}/scores/`, {
//   mode: 'cors',
// }).then((response) => response.json());

// export default getScores;
