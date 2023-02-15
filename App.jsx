import React from 'react';
import CarouselDev from './components/itemsComparison/index.jsx';
import CarouselTransform from './components/itemsComparison/CarouselTransform.jsx';
import ThreeD from './components/itemsComparison/ThreeD.jsx';

export default function App() {
  return (
    <React.StrictMode>
      <CarouselDev />
      <CarouselTransform />
      <ThreeD />
    </React.StrictMode>
  );
}
