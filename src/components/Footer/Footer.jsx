import React, { Component } from 'react'
import style from './Footer.module.css'
import Icons from './Icons';
export default class Footer extends Component {
    state = {
        icons: [
            { icon: "fa-brands fa-facebook-f" },
            { icon: "fa-brands fa-twitter" },
            { icon: "fa-brands fa-linkedin-in" },
            { icon: "fa-solid fa-basketball" }
        ]


    }
    render() {
        return (

                <footer  >
                    <div className={style.back}>
                    <div className="container py-3">
                        <div className={`row justify-content-around pt-5 text-center text-white`} >
                            <div className="col-3 ">
                                <h2 className='fs-4 fw-bold pb-3'>LOCATION</h2>
                                <p className='  fs-6 px-4'>2215 John Daniel Drive
                                    Clark, MO 65243</p>
                            </div>
                            <div className="col-3">
                                <h2 className='fs-4 fw-bold'>AROUND THE WEB</h2>
                                <div className='d-flex gap-3 pt-3 justify-content-center'>  {this.state.icons.map((icon, index) => <Icons key={index} icondata={icon} />)}</div>
                            </div>
                            <div className="col-3">
                                <h2 className='fs-4 fw-bold pb-3'>ABOUT FREELANCER</h2>
                                <p className='  fs-6 px-1 '>Freelance is a free to use, MIT licensed Bootstrap theme created by 
                              <span className={`text-decoration-underline px-1 ${style.bootColor}`}>Start Bootstrap</span>. </p>
                            </div>

                        </div>
                    </div>
                    
                    </div>
                    <div className={style.endColor}>
                      <p className='text-white py-4 text-center m-0'>Copyright © Your Website 2022</p>
                  </div>
                </footer>
             
             
        )
    }
}
