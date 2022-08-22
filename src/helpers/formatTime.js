import { differenceInMilliseconds, millisecondsToSeconds } from 'date-fns';

// Takes value seconds and returns hh:mm:ss
const formatSeconds = (seconds) => {
  return new Date(seconds * 1000).toISOString().substring(11, 19);
};

const formatScore = (score) => {
  const seconds = millisecondsToSeconds(score);
  const differenceMs = differenceInMilliseconds(score, seconds * 1000);

  const formatLeft = formatSeconds(seconds);
  // seconds => hh:mm:ss
  const formatRight = (differenceMs / 1000).toFixed(2).substring(1);
  // ms => .ms

  return formatLeft + formatRight;
};

export { formatSeconds as seconds, formatScore as score };
