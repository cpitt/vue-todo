// Fake service
export const get = () =>
  Promise.resolve([
    { id: 1, title: 'do thing 1', complete: false },
    { id: 2, title: 'do thing 2', complete: false },
  ]);

export const put = todo => Promise.resolve(todo);

export const post = todo => Promise.resolve(todo);
