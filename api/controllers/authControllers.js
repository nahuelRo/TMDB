import Models from "../models/index.js";

const register = (req, res) => {
  console.log(req.body);
  Models.User.create(req.body);
  res.sendStatus(201);
};

export default { register };
