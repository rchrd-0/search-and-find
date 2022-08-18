const isInRange = (user, ideal) => {
  // User cursor x, y must be within 4% of correct relative coordinate
  const range = 0.04;

  const x = user.x >= ideal.x - range && user.x <= ideal.x + range;
  const y = user.y >= ideal.y - range && user.y <= ideal.y + range;

  return x && y;
};

export { isInRange };
