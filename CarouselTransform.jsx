import React from 'react';

function CarouselTransform() {
  const onA = () => {
    const toView = document.getElementById('a');
    toView.scrollIntoView({
      behavior: 'auto',
      block: 'nearest',
      inline: 'center',
    });
  };

  const onB = () => {
    const toView = document.getElementById('b');
    toView.scrollIntoView({
      behavior: 'auto',
      block: 'nearest',
      inline: 'center',
    });
  };

  const onC = () => {
    const toView = document.getElementById('c');
    toView.scrollIntoView({
      behavior: 'auto',
      block: 'nearest',
      inline: 'center',
    });
  };

  const onD = () => {
    const toView = document.getElementById('d');
    toView.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  const onE = () => {
    const toView = document.getElementById('e');
    toView.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  const onF = () => {
    const toView = document.getElementById('f');
    toView.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  return (
    <div className="TransformComponent">
      <h1>Scroll Options - Smooth vs Auto</h1>
      <div className="TransformCardContainer">
        <div id="a" className="TransformCard">
          <h3>A</h3>
        </div>
        <div id="b" className="TransformCard">
          <h3>B</h3>
        </div>
        <div id="c" className="TransformCard">
          <h3>C</h3>
        </div>
        <div id="d" className="TransformCard">
          <h3>D</h3>
        </div>
        <div id="e" className="TransformCard">
          <h3>E</h3>
        </div>
        <div id="f" className="TransformCard">
          <h3>F</h3>
        </div>
      </div>
      <div className="buttonsCarousel">
        <div className="selection" onClick={onA}>A</div>
        <div className="selection" onClick={onB}>B</div>
        <div className="selection" onClick={onC}>C</div>
        <div className="selection" onClick={onD}>D</div>
        <div className="selection" onClick={onE}>E</div>
        <div className="selection" onClick={onF}>F</div>
      </div>
    </div>
  );
}

export default CarouselTransform;
