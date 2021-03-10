import { sendData, retrieveData } from './ScoreApi';

sendData.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({ name: 'TEST1', score: 45 }),
}));


retrieveData.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({ name: 'TEST1', score: 45 }),
}));


test('sending data', () => sendData('Rose', 600).then(data => {
  expect(data.result).toBe('Leaderboard score created correctly.');
}));

test('getting data', () => retrieveData().then(data => {
  expect(typeof data).toBe('object');
}));

it('makes a fetch API call', () => {
  expect(retrieveData('Tester', 300) instanceof Promise).toBeTruthy();
});

describe('Posting new highscores via async/await', () => {
  test('Will post a new highscore with a username and a score without errors', () => sendData('TEST1', 45).then(response => {
    expect(response.result).toStrictEqual('Leaderboard score created correctly.');
  }));
});

describe('Retrieving highscores from the API', () => {
  test('It will return an object', () => retrieveData().then(response => {
    expect(typeof response).toBe('object');
  }));
});