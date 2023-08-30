import tokens from "../utils/tokens.js";

const validateUser = (req, res, next) => {
  const { token } = req.cookies;

  try {
    const payload = tokens.validateToken(token);
    req.user = payload;
    next();
  } catch (error) {
    res.sendStatus(401);
  }
};

export default validateUser;
