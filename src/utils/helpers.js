const slugify = sentence => {
  return sentence
    .toLowerCase()
    .split(" ")
    .join("-");
};

export { slugify };
