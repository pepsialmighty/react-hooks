import React, { useState } from 'react';
import './ColorBox.scss';

function getRandomColor() {
  const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}

const ColorBox = () => {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem('box_color') || 'deeppink';
    console.log(initColor);
    return initColor;
  });

  // const handelBoxClick = () =>
  //   setColor(() => getRandomColor());

  function handelBoxClick() {
    //get random color -> setcolor
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem('box_color', newColor);
  }

  return (
    <div
      className='color-box'
      style={{ backgroundColor: color }}
      // onClick={handelBoxClick}
      onClick={() => handelBoxClick()}
    >
      COLOR BOX
    </div>
  );
};

ColorBox.propTypes = {};

export default ColorBox;
