const users = [];

export const addUser = (user) => users.push(user);

export const getUserByEmail = (email) => users.find(u => u.email === email);

export const validateUser = (email, password) =>
  users.find(u => u.email === email && u.password === password);
