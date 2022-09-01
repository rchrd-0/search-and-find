import getLevelManifest from '../assets/levelManifest';

const levelManifest = getLevelManifest();

const getIndex = (level) => {
  return levelManifest.findIndex((obj) => obj.id === level);
};

const getNextLevel = (currentLevel) => {
  const currentIndex = getIndex(currentLevel);
  const next = currentIndex === levelManifest.length - 1 ? 0 : currentIndex + 1;
  return levelManifest[next].id;
};

const getPreviousLevel = (currentLevel) => {
  const currentIndex = getIndex(currentLevel);
  const prev = currentIndex === 0 ? levelManifest.length - 1 : currentIndex - 1;
  return levelManifest[prev].id;
};

export {
  getNextLevel as nextLevel,
  getPreviousLevel as previousLevel,
  getIndex,
};
