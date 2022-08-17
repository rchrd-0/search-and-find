const importAll = (r) => {
  const images = {};
  r.keys().map((item) => {
    return (images[item.replace('./', '')] = r(item));
  });
  return images;
};

export default importAll;
