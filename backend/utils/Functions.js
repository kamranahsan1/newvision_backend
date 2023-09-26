const generateUniqueSlug = (value) => {
  return value
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .slice(0, 50);
};
module.exports = {
  generateUniqueSlug,
};
