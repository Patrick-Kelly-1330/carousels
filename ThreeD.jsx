import React, { useEffect, useState } from 'react';
import CarouselThree from './CarouselThree.jsx';

function ThreeD() {
  const [angle, setAngle] = useState(45);
  const [figStyling, setFigStyling] = useState({

  });

  const onIncrease = () => {
    setAngle(angle + 45);
    setFigStyling({
      '-webkit-transform': `rotateY(${angle}deg)`,
      transform: `rotateY(${angle}deg)`,
    });
  };

  const onDecrease = () => {
    setAngle(angle - 45);
    setFigStyling({
      '-webkit-transform': `rotateY(${angle}deg)`,
      transform: `rotateY(${angle}deg)`,
    });
  };

  useEffect(() => {

  }, []);

  return (
    <div className="CaroContainer">
      <CarouselThree figSpiral={figStyling} />
      <nav className='carouselActions'>
        <div className="carButton" onClick={onDecrease} >Prev</div>
        <div className="carButton" onClick={onIncrease} >Next</div>
      </nav>
    </div>
  );
}

export default ThreeD;
