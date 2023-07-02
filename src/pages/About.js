import React from 'react'
import Pizza from "../assets/pizza.jpeg"
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${Pizza}`}}>
            
        </div>
        <div className='aboutBottom'>
            <h1> ABOUT US </h1>
            <p>ASDJKLDQWJKLEJKLQWJLKEQWLKJASDJKLDQWJKLEJKLQWJLKEQWLKJASDJKLDQWJKLEJKLQWJLKEQWLKJASDJKLDQWJKLEJKLQWJLKEQWLKJ</p>
        </div>
    </div>
  )
}

export default About
