import { Router } from "express";
import { body } from "express-validator";
import postCtrl from "../controllers/post.controller.js";
import { verifyToken } from "../middlewares/auth.js";
import { upload } from "../middlewares/imgUpload.js";
import { validFields } from "../middlewares/validFields.js";

const route = Router();

route.get("/", verifyToken, postCtrl.listar);
route.get("/user", verifyToken, postCtrl.listarPostLogin);
route.get("/:id", verifyToken, postCtrl.listOne);
route.post(
  "/",
  verifyToken,

  body("title", "el campo title es obligatorio").optional({
    checkFalsy: false,
  }),
  body("description", "el campo description es obligatorio").optional({
    checkFalsy: false,
  }),
  body("imgUrl").optional(),

  validFields,
  upload.single("img"),
  postCtrl.add
);
route.delete("/:id", verifyToken, postCtrl.delete);
route.put("/:id", verifyToken, upload.single("img"), postCtrl.update);

export default route;
