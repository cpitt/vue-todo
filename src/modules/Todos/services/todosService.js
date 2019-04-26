import axios from 'axios';
// Fake service
export const get = () =>
  axios
    .get('https://jsonplaceholder.typicode.com/todos?userId=1')
    .then(resp => resp.data);

export const put = todo => Promise.resolve(todo);

export const post = todo => Promise.resolve(todo);
