import React from 'react';
import Henry from '../../assets/henry.jpg';
import Henry2 from '../../assets/henry2.jpg';
import Cheetos from '../../assets/cheetos.png';
import Cheetos2 from '../../assets/cheetos2.png';

function CarouselThree({ figSpiral }) {
  return (
    <div id="gallery">
      <h1 id="headerOne">Three D Carousel</h1>
      <figure style={figSpiral} id="spinner">
        <img src={Henry} alt="" />
        <img src={Cheetos} alt="" />
        <img src={Henry2} alt="" />
        <img src="https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="" />
        <img src="https://source.unsplash.com/nvzvOPQW0gc/800x533" alt="" />
        <img src="https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="" />
        <img src="https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="" />
        <img src={Cheetos2} alt="" />
      </figure>
    </div>
  );
}

export default CarouselThree;
