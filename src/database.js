import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGOURI);
    console.log("base de datos conectada", db.connection.name);
  } catch (error) {
    console.log("error al conectar a la base de datos", error.message);
  }
};
