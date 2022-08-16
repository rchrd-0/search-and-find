const getWindowSize = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

const findY = () => Math.ceil(document.scrollingElement.scrollTop);

const findX = () => Math.ceil(window.innerWidth * 0.05);

const getCursor = (e) => {
  return {
    x: e.clientX,
    y: e.clientY,
  };
};

export { getWindowSize, findY, findX, getCursor };
