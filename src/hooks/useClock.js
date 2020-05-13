import { useEffect, useState } from 'react';

function formatDate(date) {
  if (!date) return '';
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const second = `0${date.getSeconds()}`.slice(-2);

  return `${hours}:${minutes}:${second}`;
}

const useClock = (props) => {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const ClockInterval = setInterval(() => {
      const now = new Date();
      // hours:minutes:seconds
      const newTimeString = formatDate(now);
      setTimeString(newTimeString);
    }, 1000);
    return () => {
      //cleanup
      console.log('Clock cleanup');
      clearInterval(ClockInterval);
    };
  }, []);

  return { timeString };
};

useClock.propTypes = {};

export default useClock;
