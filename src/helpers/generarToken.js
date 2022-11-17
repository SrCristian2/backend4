import * as dotenv from 'dotenv' 
dotenv.config()

import jwt from "jsonwebtoken";

export const generateToken = (payload) => {
  try {
    const token = jwt.sign(payload, process.env.SECRET_WORD, {
      expiresIn: "30d",
    });
    return token;
  } catch (error) {
    console.log("error en generateToken", error.message);
  }
};
