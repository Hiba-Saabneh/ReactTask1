import React, { Component } from 'react'
import style from './About.module.css'
import Star from '../star/Star'
export default class About extends Component {
  render() {
    return (
      <div className={style.back}>
      
        <h2 className='text-center fs-1 text-white pt-5 fw-bold'>ABOUT</h2>
        <Star key={2}/>
        <div className="container pt-3">
          <div className="row text-white justify-content-center gap-3 fs-5 ">
            <div className="col-4 ">
Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
            <div className="col-4">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</div>
          </div>
        </div>
        <div className='d-flex justify-content-center pt-4 pb-5'>
        <button className='btn border border-2 text-white border-white p-3 '>
          <i class="fa-solid fa-download px-2"></i> <span>Free Download!</span>
          </button>
        </div>
        </div>
    )
  }
}
