import {
  differenceInMilliseconds,
  intervalToDuration,
  differenceInSeconds,
} from 'date-fns';

const getDuration = (start, end) => intervalToDuration(start, end);

const getMs = (end, start) => {
  const seconds = differenceInSeconds(end, start);
  const milliseconds = differenceInMilliseconds(end, start);

  return Math.floor((milliseconds - seconds * 1000) / 10);
};

const getSeconds = (end, start) => differenceInSeconds(end, start);

const formatSeconds = (seconds) => {
  return new Date(seconds * 1000).toISOString().substring(11, 19);
};

export { getMs, getSeconds, getDuration, formatSeconds };
