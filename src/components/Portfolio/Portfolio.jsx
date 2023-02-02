import React, { Component } from 'react';
import style from './Portfolio.module.css';
import Bstar from '../Bstar/Bstar';
import Portpic from './Portpic';

export default class Portfolio extends Component {
 state={
    imgs:[
        {img:'1.png'},
        {img:'2.png'},
        {img:'3.png'},
        {img:'4.png'},
        {img:'5.png'},
        {img:'6.png'}

    ]
 }
  render() {
    return (
      <div >
        <h2 className={`text-center pt-5 ${style.back} fs-1 fw-bold`}> PORTFOLIO</h2>
        <div className='pb-5'>
            <Bstar key={1}  />
        </div>
        <div className="container pb-5">
    <div className="row  py-5">
      
      {this.state.imgs.map((img,index)=> <Portpic key={index} img={img}/>)}
      </div>
    </div>
        </div>
    )
  }
}
