import React, { Component } from 'react'
import style from './Star.module.css';
export default class Star extends Component {
  render() {
 
    return (
      <div className='d-flex justify-content-center align-items-center gap-3'>
        <div className={style.linewhite} ></div>
        <div className={style.icon}><i class="fa-solid fa-star"></i></div>
        <div className={style.linewhite}></div>
        
      </div>
    )
  }
}
