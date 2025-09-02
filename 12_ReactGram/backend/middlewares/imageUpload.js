import multer from "multer";
import path from "path";

// Destination to store image
const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = "";

    if (req.baseUrl.includes("users")) {
      folder = "users";
    } else if (req.baseUrl.includes("photos")) {
      folder = "photos";
    }

    cb(null, `uploads/${folder}/`);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const imageUpload = multer({
  storage: imageStorage,
  fileFilter(req, file, cb) {
    const allowedExtensions = /\.(png|jpg|jpeg|webp)$/i;

    if (!file.originalname.match(allowedExtensions)) {
      return cb(
        new Error(
          "Por favor, envie apenas imagens nos formatos png, jpg, jpeg ou webp!"
        )
      );
    }
    cb(undefined, true);
  },
});

export { imageUpload };
