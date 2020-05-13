import React from 'react';
import useClock from '../../hooks/useClock';

const Clock = (props) => {
  const { timeString } = useClock();

  return (
    <p
      style={{
        fontSize: '42px',
      }}
    >
      {timeString}
    </p>
  );
};

Clock.propTypes = {};

export default Clock;
