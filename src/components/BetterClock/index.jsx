import React from 'react';
import useClock from '../../hooks/useClock';
import './BetterClock.scss';

const BetterClock = (props) => {
  const { timeString } = useClock();

  return (
    <div className='better-clock'>
      <p className='better-clock-time'>{timeString}</p>
    </div>
  );
};

BetterClock.propTypes = {};

export default BetterClock;
