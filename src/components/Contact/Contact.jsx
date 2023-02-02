import React, { Component } from 'react'
import Bstar from '../Bstar/Bstar'
import style from './Contact.module.css'
export default class Contact extends Component {
  render() {
    return (
      <div className='py-5'>
         <h2 className={`text-center  ${style.back} pt-5 fw-bold`}>CONTACT ME</h2>
         <Bstar key={2}/>
<div className={style.container}>
 <form className='pt-3'>
  <div className="mb-3">

    <input type="email" placeholder='FULL NAME' className={`form-control py-3 border-top-0 border-end-0 border-start-0 rounded-0 fw-bolder`}  />
  
  </div>
  <div className="mb-3">
 
    <input type="password" placeholder='EMAIL ADDRESS' className="form-control py-3 fw-bolder rounded-0 border-top-0 border-end-0 border-start-0 " />
  </div>
  <div className="mb-3">
 
    <input type="text" placeholder='PHONE NUMBER' className="form-control py-3 fw-bolder rounded-0 border-top-0 border-end-0 border-start-0 " />
  </div> 
  <div className="mb-3">
 
   <textarea name="comment" className={`pt-3 ps-2 fw-bolder border-top-0 border-end-0 border-start-0   ${style.border}`}   placeholder='MESSAGE' cols="65" rows="4" ></textarea>
  </div> 
  <button type="submit" className="btn btn-info px-4 py-3 text-white  " >Send</button>
</form>
</div>
      </div>
    )
  }
}
