
import img from '../Images/img26.webp'
import img1 from '../Images/img27.webp'
import img2 from '../Images/img28.webp'
import img3 from '../Images/img29.webp'
import img4 from '../Images/img30.webp'
import img5 from '../Images/img31.webp'
import img6 from '../Images/img32.webp'
import img7 from '../Images/img33.webp'


import React from 'react'
import Divbox from '../Coponments/Divbox'
import './Section.css'

function Section1() {
  return (
    <div className='section'>
        <h1>GLASS</h1>
    <div className='section1'>
        <Divbox image={img} name='Glass' prize="1499"/>
        <Divbox image={img1} name='Glass' prize="1499"/>
        <Divbox image={img2} name='Glass' prize="1499"/>
    </div>
    <div className='section1'>
        <Divbox image={img3} name='Glass' prize="1499"/>
        <Divbox image={img4} name='Glass' prize="1499"/>
        <Divbox image={img5} name='Glass' prize="1499"/>
    </div>
    <div className='section1'>
        <Divbox image={img6} name='Glass' prize="1499"/>
        <Divbox image={img7} name='Glass' prize="1499"/>
        <Divbox image={img} name='Glass' prize="1499"/>
    </div>

    </div>
  )
}

export default Section1