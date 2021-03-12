import 'regenerator-runtime';

const fetch = require('node-fetch');

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SD0NdiFAu21haegnid9c/scores/';

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

  try {
    const postRequest = await fetch(url, postData);
    const data = await postRequest.json();
    return data;
  } catch (error) {
    throw new Error(`Could not reach the API: ${error}`);
  }
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

  try {
    const getRequest = await fetch(url, getData);
    const data = await getRequest.json();

    return data.result;
  } catch (error) {
    throw new Error(error);
  }
};
