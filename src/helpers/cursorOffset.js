// const getClientSize = () => {
//   return {
//     width: document.body.clientWidth,
//     height: document.body.clientHeight,
//   };
// };

// const findY = () => Math.ceil(document.scrollingElement.scrollTop);

// const findX = () => Math.ceil(document.body.clientWidth * 0.025);

const appOffsets = {
  contextMenuWidth: 200,
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

const getMenuMargin = (offsetWidth, x) => {
  const { cursorSizeHalf, targetMenuGap, contextMenuWidth } = appOffsets;
  const absoluteX = x * offsetWidth;
  const margin = cursorSizeHalf + targetMenuGap + contextMenuWidth;

  return absoluteX + margin > offsetWidth
    ? -margin
    : cursorSizeHalf + targetMenuGap;
};

export {
  // getClientSize,
  // findY,
  // findX,
  getCursor,
  getHeaderRelative,
  getMenuMargin,
};
