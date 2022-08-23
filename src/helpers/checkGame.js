const isInRange = (user, ideal) => {
  // User cursor x, y must be within 4.5% of correct relative coordinate
  const range = 0.045;

  const x = user.x >= ideal.x - range && user.x <= ideal.x + range;
  const y = user.y >= ideal.y - range && user.y <= ideal.y + range;

  return x && y;
};

export default isInRange;
