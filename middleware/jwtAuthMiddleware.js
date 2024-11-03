import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).send({
      success: false,
      message: "You are not authorized to access this content!",
    });
  }

  const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = payload;
  // console.log(req.user);
  next();
};

export default jwtAuth;
