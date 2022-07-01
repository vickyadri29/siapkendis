import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ChangePageTitle from '../ChangePageTitle';
import './styles.css';
import Logo from '../../img/logo1.png';

import sliderOne from '../../img/img1.jpeg';
import sliderTwo from '../../img/img2.jpeg';
import sliderThree from '../../img/img3.jpeg';
import sliderFour from '../../img/img4.jpeg';


const SlideImage = ({ imgs }) => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        setIndex(0)
    }, [])

    return ( 
        <div className="slideshow">
            <>
            <ChangePageTitle pageTitle={"Selamat Datang di SIAPKENDIS"} />
            </>
            <h1>SELAMAT DATANG DI SIAPKENDIS <br />MILIK BADAN PENGELOLAAN KEUANGAN DAN ASET DAERAH</h1>
            <img className="mainImg" src={imgs[index]} alt="sliders" />
            <div className="actions">
                {/* <button onClick={prev}>Prev</button>
                <button onClick={next}>Next</button> */}
            </div>
    </div>
    )
}

const LandingPage = () => {
    
    return (
        <div className="landingpage-container">
            <header>
                <div className="logo-lp">
                    <img src={Logo} alt="logo" width={"40px"}/>
                    <h1>SIAPKENDIS</h1>
                </div>

                <nav>
                    <ul>
                        <Link to={"/"}><li>Home</li></Link>
                        <Link to={"/login"}><li>Login</li></Link>
                    </ul>
                </nav>
            </header>

            <main>
                <div className="App">
                    <SlideImage
                        imgs={[
                            sliderThree,
                            sliderFour,
                            sliderOne,
                            sliderTwo
                        ]}
                    />
                </div>
            </main>

            <footer>
                <p>&copy;Maimo CopyRight 2022, siapkenas.com, <span style={{fontStyle:"italic"}}>All rights reserved</span></p>
            </footer>
        </div>
    )
}

export default LandingPage;