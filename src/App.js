import React, { useRef } from 'react';
import Navbar from './Navbar/Navbar';
import CarouselComponent from './CarouselComponent';
import Mainsection from './Section/Mainsection';
import { Footer } from './Footer/Footer';

function App() {
  const carouselRef = useRef(null);
  const mainSectionRef = useRef(null);

  const scrollToCarousel = () => {
    carouselRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMainSection = () => {
    mainSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
     
      <Navbar onHomeClick={scrollToCarousel} onAboutClick={scrollToMainSection} />
      
      <div ref={carouselRef}>
        <CarouselComponent />
      </div>
      <div ref={mainSectionRef}>
        <Mainsection />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
