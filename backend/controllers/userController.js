const registerUser = (req, res) => {
  res.send("Register a new user");
};

const loginUser = (req, res) => {
  res.send("Login user");
};

module.exports = {
  registerUser,
  loginUser,
};
