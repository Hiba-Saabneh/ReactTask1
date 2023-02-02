import React, { Component } from 'react'
import style from './Bstar.module.css'
export default class Bstar extends Component {
  render() {
    return (
        <div className='d-flex justify-content-center align-items-center gap-3'>
        <div className={style.lineBlack} ></div>
        <div className={style.icon}><i class="fa-solid fa-star"></i></div>
        <div className={style.lineBlack}></div>
        
      </div>
    )
  }
}
