import React from 'react'
import img1 from "./Images/one.jfif"
import img2 from "./Images/fire.jfif"
import img3 from "./Images/two.jpg"

const Content = () => {
    return (
        <div className='content'>
            <h1><span>Our</span>services</h1>
            <div className="cardbody">
                <div className="card">
                    <img src={img2} alt="" />
                    <h1><span>Ex</span>tinguishing Fire</h1>
                    <div className="info">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, omnis.</p>
                        <button>See more</button>
                    </div>
                </div>
                <div className="card">
                    <img src={img1} alt="" />
                    <h1><span>Pl</span>ace Detection</h1>
                    <div className="info">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, omnis.</p>
                        <button>See more</button>
                    </div>
                </div>
                <div className="card">
                    <img src={img3} alt="" />
                    <h1><span>Al</span>arm Checking</h1>
                    <div className="info">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, omnis.</p>
                        <button>See more</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Content
