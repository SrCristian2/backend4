import { validationResult } from "express-validator";
import { response } from "../helpers/response.js";

export const validFields = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return response(res, 400, false, "", errors);
  }
  next();
};
