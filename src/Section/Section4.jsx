
import img from '../Images/img34.webp'
import img1 from '../Images/img35.webp'
import img2 from '../Images/img36.webp'
import img3 from '../Images/img37.webp'
import img4 from '../Images/img38.webp'
import img5 from '../Images/img39.webp'
import img6 from '../Images/img40.webp'
import img7 from '../Images/img41.webp'


import React from 'react'
import Divbox from '../Coponments/Divbox'
import './Section.css'

function Section1() {
  return (
    <div className='section'>
        <h1>WATCH</h1>
    <div className='section1'>
        <Divbox image={img} name='Watch' prize="999"/>
        <Divbox image={img1} name='Watch' prize="499"/>
        <Divbox image={img2} name='Watch' prize="1499"/>
    </div>
    <div className='section1'>
        <Divbox image={img3} name='Watch' prize="1499"/>
        <Divbox image={img4} name='Watch' prize="999"/>
        <Divbox image={img5} name='Watch' prize="1499"/>
    </div>
    <div className='section1'>
        <Divbox image={img6} name='Watch' prize="1499"/>
        <Divbox image={img7} name='Watch' prize="499"/>
        <Divbox image={img} name='Watch' prize="1499"/>
    </div>

    </div>
  )
}

export default Section1