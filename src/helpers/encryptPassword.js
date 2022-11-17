import bcrypt from "bcrypt";

export const encryptPassword = (password) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const passwordEncriptada = bcrypt.hashSync(password, salt);
    return passwordEncriptada;
  } catch (error) {
    console.log("error en encryptPassword", error.message);
  }
};
