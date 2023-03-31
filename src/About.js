import React from 'react'
import personFire from "./Images/personFire.jfif"
const About = () => {
    return (
        <div className='about'>
            <h1><span>Ab</span>out us</h1>
            <div className="sideleft">
                <img src={personFire} alt="FirePerson" />
                <div className="text">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsa, dolore numquam similique debitis perspiciatis eos harum quas tempore animi.</p>
                    <button>Read more</button>
                </div>

            </div>
            <div className="sideright">
                <h1>Watch our Daily Work</h1>
                <div className="vd">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/k5HNHUGCFZw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                </div>
            </div>
        </div>
    )
}

export default About
