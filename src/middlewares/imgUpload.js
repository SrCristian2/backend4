import { v4 as uuidv4 } from "uuid";
import multer from "multer";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//crear carpeta donde se va almacenar las imagenes == storage
const storage=multer.diskStorage({
    destination:path.join(__dirname,"../storage/imgs"),
    filename:function(req,file,cb){
        cb(null,uuidv4() + path.extname(file.originalname).toLowerCase())
    }
})

//upload
export const upload=multer({
    storage,
    fileFilter:(req,file,cb)=>{
        // console.log(file)
        const fileTypes=/jpeg|jpg|png|svg/;
        const mimetype=fileTypes.test(file.mimetype);
        const extname=fileTypes.test(path.extname(file.originalname))
        if(mimetype && extname){
            return cb(null,true)
        }
        cb("error: el archivo no es valido, debe ser jpeg|jpg|png|svg")
    }
})
