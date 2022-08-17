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
    x: e.pageX,
    y: e.pageY,
  };
};

const getContextOffset = (offsetWidth, x) => {
  const contextMenuWidth = 200;
  const headerHeight = 60;
  const cursorSize = 64;
  const targetMenuGap = 16;

  const menuX =
    x + cursorSize / 2 + targetMenuGap + contextMenuWidth > offsetWidth
      ? -(contextMenuWidth + cursorSize / 2 + 16)
      : cursorSize / 2 + targetMenuGap;

  return {
    targetX: cursorSize / 2,
    targetY: headerHeight + cursorSize / 2,
    menuX,
    menuY: 120,
  };
};

export { getClientSize, findY, findX, getCursor, getContextOffset };
