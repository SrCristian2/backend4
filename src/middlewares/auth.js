import * as dotenv from "dotenv";
dotenv.config();

import { response } from "../helpers/response.js";
import jwt from "jsonwebtoken";
import { userModel } from "../models/user.model.js";

const messageNoAuth = (res) => {
  return response(res, 401, false, "", "no estas autorizado");
};

export const verifyToken = async (req, res, next) => {
  let token = null;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    
    jwt.verify(token, process.env.SECRET_WORD, async (err, payload) => {
      if (err) {
        return messageNoAuth(res);
      }

      const user = await userModel.findById({ _id: payload.user });

      if (!user) {
        return messageNoAuth();
      }
      req.userId = payload.user;
      next();
    });
  }
  if (!token) {
    return messageNoAuth(res);
  }
};
