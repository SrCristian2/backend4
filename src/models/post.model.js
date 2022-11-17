import mongoose from "mongoose";
const { Schema, model } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "el campo titulo es obligatorio"],
    },
    description: {
      type: String,
      required: [true, "el campo description es obligatorio"],
    },

    imgUrl: { type: String, default: null },
    // nameImage: String,
    public_id: String,

    user:{
      type:Schema.Types.ObjectId,
      ref:"user"
    }
  },
  {
    timestamps: true,
  }
);

// postSchema.methods.setImg = function setImg(filename) {
//   const url = "http://localhost:4000/public/";
//   this.imgUrl = url + filename;
//   this.nameImage = filename;
// };

postSchema.methods.setImg = function setImg({secure_url,public_id}) {
  
  this.imgUrl = secure_url;
  this.public_id = public_id;
};

export const postModel = model("post", postSchema);
