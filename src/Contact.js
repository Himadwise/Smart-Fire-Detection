import React from 'react'

const Contact = () => {
    return (
        <div className='contact'>
            <h1><span>Con</span>tact us</h1>
            <form>
                <div className="formbody">
                    <div className="form-control">
                        <label htmlFor="name">User name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="Email">Email</label>
                        <input type="text" name="Email" id="Email" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="msg">Your Message</label>
                        <textarea name="msg" id="msg" cols="40" rows="10"></textarea>
                    </div>
                </div>
                <button>Submit</button>
            </form>

        </div>
    )
}

export default Contact
