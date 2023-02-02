import React, { Component } from 'react'

export default class Portpic extends Component {
  render() {
    let {img}=this.props.img;
            return (
     <div className="col-4 pb-3 px-4 ">
 < img src={`img/${img}`} alt={img} className='img-fluid w-100 rounded'/>
     </div>
    )
  }
}
