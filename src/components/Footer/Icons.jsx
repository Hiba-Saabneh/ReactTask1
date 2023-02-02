import React, { Component } from 'react'
import style from './Footer.module.css'
export default class Icons extends Component {
  render() {
    let {icon} = this.props.icondata;
    return (
     
      <div>

 <a className=' text-white   text-decoration-none m-auto' href='/'><i className={`${icon} border border-2 ${style.round} rounded-circle  `}></i></a>

      </div>
    )
  }
}
