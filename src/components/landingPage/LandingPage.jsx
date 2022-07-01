import React from "react";
import { Link } from "react-router-dom";

import './styles.css';
import Logo from '../../img/logo1.png';

import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import sliderOne from '../../img/img1.jpeg';
import sliderTwo from '../../img/img2.jpeg';
import sliderThree from '../../img/img3.jpeg';
import sliderFour from '../../img/img4.jpeg';

const slideImages = [
    sliderOne,
    sliderTwo,
    sliderThree,
    sliderFour
]

class LandingPage extends React.Component {
    
    render(){
    return (
        <div className="landingpage-container">
            <header>
                <div className="logo-lp">
                    <img src={Logo} alt="logo" width={"40px"}/>
                    <h1>SIAPKENDIS</h1>
                </div>

                <nav>
                    <ul>
                        <Link to={"/dashboard"}><li>Dashboard</li></Link>
                        <Link to={"/login"}><li>Login</li></Link>
                    </ul>
                </nav>
            </header>

            <main>
                <article>
                    <div>
                       <Fade>
                           {
                               slideImages.map((each, index) => <img key={index} style={{width: "100%"}} src={each} alt="slider" />)
                           }
                       </Fade>
                    </div>
                </article>
            </main>

            <footer>
                <p>&copy;2022 Siapkenas.com, <span style={{fontStyle:"italic"}}>All rights reserved</span></p>
            </footer>
        </div>
    )
    }
}

export default LandingPage;