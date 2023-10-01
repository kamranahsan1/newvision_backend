/*
const upload = async (uploadedFile) => {
  const uploadPath = __dirname + `\\uploads\\` + uploadedFile.name;
  console.log(uploadPath);
  uploadedFile.mv(uploadPath, (err) => {
    if (err) {
      return err;
    } else {
      return uploadPath;
    }
  });
};
*/
const { generateFileName } = require("./utils/FileNameGeneration");
const upload = async (uploadedFile, ImageName) => {
  const uploadPath =
    __dirname +
    `\\uploads\\` +
    ImageName +
    "." +
    uploadedFile.mimetype.split("/")[1];
  console.log(uploadPath);

  try {
    await new Promise((resolve, reject) => {
      uploadedFile.mv(uploadPath, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(uploadPath);
        }
      });
    });

    console.log("File uploaded successfully.");
    return uploadPath;
  } catch (err) {
    console.error("Error uploading file:", err);
    throw err;
  }
};
module.exports = {
  upload
};
