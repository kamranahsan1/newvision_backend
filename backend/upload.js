const upload = async (uploadedFile) => {
  const uploadPath = __dirname + `\\uploads\\` + uploadedFile.name;
  uploadedFile.mv(uploadPath, (err) => {
    if (err) {
      return err;
    } else {
      return uploadPath;
    }
  });
};
module.exports = {
  upload
};
