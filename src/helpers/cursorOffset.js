const getClientSize = () => {
  return {
    width: document.body.clientWidth,
    height: document.body.clientHeight,
  };
};

const appOffsets = {
  contextMenuWidth: 180,
  headerHeight: 60,
  cursorSizeHalf: 64 / 2,
  targetMenuGap: 16,
};

const getCursor = (e) => {
  return {
    x: e.pageX,
    y: e.pageY,
  };
};

const getHeaderRelative = (offsetHeight) =>
  (appOffsets.headerHeight / offsetHeight) * 100;

const getMenuMarginX = (offsetWidth, x) => {
  const { cursorSizeHalf, targetMenuGap, contextMenuWidth } = appOffsets;
  const absoluteX = x * offsetWidth;
  const margin = cursorSizeHalf + targetMenuGap + contextMenuWidth;

  return absoluteX + margin > offsetWidth
    ? -margin
    : cursorSizeHalf + targetMenuGap;
};

const getMenuMarginY = (clientY) => (clientY < 130 ? 10 : -60);

export {
  getClientSize,
  getCursor,
  getHeaderRelative,
  getMenuMarginX,
  getMenuMarginY,
};
