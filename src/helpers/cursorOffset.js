const getClientSize = () => {
  return {
    width: document.body.clientWidth,
    height: document.body.clientHeight,
  };
};

const findY = () => Math.ceil(document.scrollingElement.scrollTop);

const findX = () => Math.ceil(document.body.clientWidth * 0.025);

const getCursor = (e) => {
  return {
    x: e.clientX,
    y: e.clientY,
  };
};

export { getClientSize, findY, findX, getCursor };
