import Photo from "../models/Photo.js";
import User from "../models/User.js";

import mongoose from "mongoose";

// Insert a photo, with an user related to it
const insertPhoto = async (req, res) => {
  const { title } = req.body;
  const image = req.file.filename;

  const reqUser = req.user;
  const user = await User.findById(reqUser.id);

  //   Create a phot
  const newPhoto = await Photo.create({
    image,
    title,
    userId: user._id,
    userName: user.name,
  });

  //   If phot was created successfully, return data
  if (!newPhoto) {
    res.status(422).json({
      errors: "Houve um problema, por favor tente novamente mais tarde.",
    });
  }
  res.status(201).json(newPhoto);
};

export { insertPhoto };
