import React, { useEffect } from 'react';

function CarouselDev() {
  const [firstSlide, setFirstSlide] = React.useState(0);
  const [lastSlide, setLastSlide] = React.useState(3);

  const decreaseCount = () => {
    if (firstSlide >= 0 && lastSlide <= 6) {
      let cardToView = document.getElementById(firstSlide);
      cardToView.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
      setFirstSlide(firstSlide - 1);
      setLastSlide(lastSlide - 1);
    }
  };

  const increaseCount = () => {
    if (firstSlide >= 0 && lastSlide <= 5) {
      let cardToView = document.getElementById(lastSlide);
      cardToView.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
      setFirstSlide(firstSlide + 1);
      setLastSlide(lastSlide + 1);
    }
  };

  useEffect(() => {
    const cardToView = document.getElementById(firstSlide);
    cardToView.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }, []);

  return (
    <div className="RawCarouselComponent">
        <h1>First and Last Slide Implementation</h1>
        <div className="RawCarouselContainer">
          {/* <button className="previous" onClick={decreaseCount}>Previous</button> */}
          <i className="fa-solid fa-circle-left fa-2xl" onClick={decreaseCount} />
          <div className="containerShadow">
            <div className="CardContainerRightShadow">
            <div className="CardContainer">
              <div id={0} className="hiddenNumber">0</div>
              <div className="Card">
                <h3>Exciting Header Information</h3>
                <h4>sample information sample information</h4>
                <h4>SAMPLE</h4>
              </div>
              <div className="hiddenNumber">1</div>
              <div className="Card">
                <h3 id={1}>Even More Exciting</h3>
                <h4>sample information sample information</h4>
                <h4>SAMPLE</h4>
              </div>
              <div  className="hiddenNumber">1</div>
              <div className="Card">
                <h3 id={2}>Some Cool Information</h3>
                <h4>sample information sample information</h4>
                <h4>SAMPLE</h4>
              </div>
              <div className="hiddenNumber">1</div>
              <div className="Card">
                <h3 id={3}>That is Pretty Surprising</h3>
                <h4>sample information sample information</h4>
                <h4>SAMPLE</h4>
              </div>
              <div  className="hiddenNumber">1</div>
              <div className="Card">
                <h3 id={4}>Wow, That's Interesting</h3>
                <h4>sample information sample information</h4>
                <h4>SAMPLE</h4>
              </div>
              <div className="hiddenNumber">1</div>
              <div className="Card">
                <h3 id={5} >Hm I'm Not Sure</h3>
                <h4>sample information sample information</h4>
                <h4>SAMPLE</h4>
              </div>
              <div id={6} className="hiddenNumber" />
            </div>
            </div>
          </div>
          <i className="fa-solid fa-circle-right fa-2xl" onClick={increaseCount} />
        </div>
    </div>
  );
}

export default CarouselDev;
