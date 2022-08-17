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

const appOffsets = {
  contextMenuWidth: 200,
  headerHeight: 60,
  cursorSize: 64,
  targetMenuGap: 16,
};

const getTargetOffset = () => {
  const { cursorSize, headerHeight } = appOffsets;

  return {
    x: cursorSize / 2,
    y: headerHeight + cursorSize / 2,
  };
};

const leftOrRight = (offsetWidth, x) => {
  const xPx = x * offsetWidth;
  const { cursorSize, targetMenuGap, contextMenuWidth } = appOffsets;

  return xPx + cursorSize / 2 + targetMenuGap + contextMenuWidth > offsetWidth
    ? -(contextMenuWidth + cursorSize / 2 + 16)
    : cursorSize / 2 + targetMenuGap;
};

export { getClientSize, findY, findX, getCursor, getTargetOffset, leftOrRight };
