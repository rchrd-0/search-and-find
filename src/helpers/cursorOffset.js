const findY = () => Math.ceil(document.scrollingElement.scrollTop);

const findX = () => Math.ceil(window.innerWidth * 0.05);

const getCursor = (e) => {
  return {
    x: e.clientX,
    y: e.clientY,
  };
};

export { findY, findX, getCursor };
