const findY = () => Math.ceil(document.scrollingElement.scrollTop);

const findX = () => Math.ceil(window.innerWidth * 0.05);

export { findY, findX };
