import Models from "../models/index.js";
import tokens from "../utils/tokens.js";

const register = async (req, res) => {
  await Models.User.create(req.body);
  res.sendStatus(201);
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await Models.User.findOne({ where: { email } });

  if (!user) {
    res.sendStatus(401);
  } else {
    const isValid = await user.validatePassword(password);

    if (!isValid) res.sendStatus(401);
    else {
      const { name, lastname } = user;
      const payload = { email, name, lastname };
      const token = tokens.generateToken(payload);

      res.cookie("token", token).send(payload);
    }
  }
};

const secret = (req, res) => {
  res.send(req.user);
};

const logout = (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
};

export default { register, login, secret, logout };
