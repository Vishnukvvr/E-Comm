
import img from '../Images/img10.webp'
import img1 from '../Images/img11.webp'
import img2 from '../Images/img12.webp'
import img3 from '../Images/img13.webp'
import img4 from '../Images/img14.jpg'
import img5 from '../Images/img15.jpg'
import img6 from '../Images/img16.jpg'
import img7 from '../Images/ing9.webp'


import React from 'react'
import Divbox from '../Coponments/Divbox'
import './Section.css'

function Section1() {
  return (
    <div className='section'>
        <h1>WOMEN</h1>
    <div className='section1'>
        <Divbox image={img} name='Women' prize="1499"/>
        <Divbox image={img1} name='Women' prize="499"/>
        <Divbox image={img2} name='Women' prize="1499"/>
    </div>
    <div className='section1'>
        <Divbox image={img3} name='Women' prize="1499"/>
        <Divbox image={img4} name='Women' prize="999"/>
        <Divbox image={img5} name='Women' prize="999"/>
      </div>
    <div className='section1'>
        <Divbox image={img6} name='Women' prize="1499"/>
        <Divbox image={img7} name='Women' prize="999"/>
        <Divbox image={img} name='Women' prize="499"/>
    </div>

    </div>
  )
}

export default Section1