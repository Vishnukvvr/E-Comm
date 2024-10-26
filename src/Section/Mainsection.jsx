import React, { useState } from 'react';
import img from '../Images/img4.webp'
import img2 from '../Images/img13.webp'
import img3 from '../Images/img29.webp'
import img4 from '../Images/img35.webp'
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import './Section.css'

function Mainsection() {
  const [selectedSection, setSelectedSection] = useState(null);

  const renderSection = () => {
    switch (selectedSection) {
      case 'Men':
        return <Section1 />;
      case 'Women':
        return <Section2 />;
      case 'Dress':
        return <Section3 />;
      case 'Watch':
        return <Section4 />;
      default:
        return <p style={{textAlign:"center"}}>Please select a category.</p>;
    }
  };

  return (
    <div className='main-section'>
      <ul>
        <li onClick={() => setSelectedSection('Men')}> <img src={img} alt="img" /><p>MEN</p></li>
        <li onClick={() => setSelectedSection('Women')}><img src={img2} alt="img" /><p>WOMEN</p></li>
        <li onClick={() => setSelectedSection('Dress')}><img src={img3} alt="img"className='image-glass' /><p>Glass</p></li>
        <li onClick={() => setSelectedSection('Watch')}><img src={img4} alt="img" /><p>WATCH</p></li>
      </ul>
      <div className="section-content">
        {renderSection()}
      </div>
    </div>
  );
}

export default Mainsection;
