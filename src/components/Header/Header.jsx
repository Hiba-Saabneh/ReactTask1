import React, { Component } from 'react'
import Star from '../star/Star'
import style from './Header.module.css'
export default class Header extends Component {
 
    render() {
      
        return (
            <header className={`d-flex  justify-content-center ${style.back} align-items-center text-center text-white  `}>
                <div className={`w-75 ${style.pt} `}>
                    <img src="img/avataaars.svg" alt="" className={`w-25 py-2`} />
                    <h1 className={` ${style.headSize} fw-bold`}>START BOOTSTRAP</h1>
                   <div className='py-2'> <Star key={1}  /></div>
                    <p className={style.size}>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </header>
        )
    }
}
