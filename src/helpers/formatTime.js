const formatTime = (seconds) => {
  return new Date(seconds * 1000).toISOString().substring(11, 19);
};

export default formatTime;
