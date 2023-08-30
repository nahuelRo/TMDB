import jwt from "jsonwebtoken";
const SECRET = "Milanesa";

const generateToken = (data) => {
  return jwt.sign(data, SECRET, { expiresIn: "2h" });
};

const validateToken = (token) => {
  return jwt.verify(token, SECRET);
};

export default { generateToken, validateToken };
