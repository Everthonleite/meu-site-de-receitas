const bcrypt = require('bcrypt');

const users = [];

function registerUser(username, password) {
  const hashedPassword = bcrypt.hashSync(password, 10);
  users.push({ username, password: hashedPassword });
}

function authenticateUser(username, password) {
  const user = users.find(u => u.username === username);
  if (user && bcrypt.compareSync(password, user.password)) {
    return true;
  }
  return false;
}

module.exports = { registerUser, authenticateUser };
