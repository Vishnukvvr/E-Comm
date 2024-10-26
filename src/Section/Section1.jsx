
import img from '../Images/img4.webp'
import img1 from '../Images/img5.webp'
import img2 from '../Images/img6.webp'
import img3 from '../Images/img7.webp'
import img4 from '../Images/img8.webp'
import img5 from '../Images/img17.webp'
import img6 from '../Images/img18.webp'
import img7 from '../Images/img23.webp'
import img8 from '../Images/img24.webp'
import img9 from '../Images/img25.webp'

import React from 'react'
import Divbox from '../Coponments/Divbox'
import './Section.css'

function Section1() {
  return (
    <div className='section'>
        <h1>MEN</h1>
    <div className='section1'>
        <Divbox image={img} name='Lymio' prize="1499"/>
        <Divbox image={img1} name='LookMark' prize="499"/>
        <Divbox image={img2} name='Dennis Lingo' prize="1499"/>
        <Divbox image={img3} name='LookMark' prize="499"/>
    </div>
    <div className='section1'>
        <Divbox image={img4} name='Lymio' prize="1499"/>
        <Divbox image={img5} name='LookMart' prize="1499"/>
        <Divbox image={img6} name='Lymio' prize="1499"/>
    </div>
    <div className='section1'>
        <Divbox image={img7} name='Dennis Lingo' prize="999"/>
        <Divbox image={img8} name='Dennis Lingo' prize="999"/>
        <Divbox image={img9} name='Lymio' prize="1499"/>
    </div>

    </div>
  )
}

export default Section1