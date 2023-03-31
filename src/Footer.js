import React from 'react'

const Footer = () => {
    return (
        <div className='foot'>
            <div className="footcontainer">
                <div className="element">
                    <h1>About us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deserunt!</p>
                    <button>Call us</button>
                </div>
                <div className="element ellist">
                    <h1>OurLinks</h1>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">about us</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                </div>
                <div className="element elsocial">
                    <h1>Social Media </h1>
                    <ul>
                        <a href="https://www.facebook.com/profile.php?id=100030198773146" target='_blank'><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href=""><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
                        <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    </ul>
                </div>
            </div>
            <hr />
            <small>All right is reserved by &copy; <span>Smart Fire Detection</span></small>
        </div>
    )
}

export default Footer
