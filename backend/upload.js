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
const upload = async (uploadedFile) => {
  const uploadPath = __dirname + `\\uploads\\` + uploadedFile.name;
  console.log(uploadPath);

  try {
    await new Promise((resolve, reject) => {
      uploadedFile.mv(uploadPath, (err) => {
        if (err) {
          reject(err); // Reject with the error
        } else {
          resolve(uploadPath); // Resolve with the file path
        }
      });
    });

    console.log("File uploaded successfully.");
    return uploadPath;
  } catch (err) {
    console.error("Error uploading file:", err);
    throw err; // Rethrow the error to handle it in the calling code
  }
};
module.exports = {
  upload,
};
