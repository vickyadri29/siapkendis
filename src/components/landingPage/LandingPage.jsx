import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './styles.css';
import Logo from '../../img/logo1.png';

import sliderOne from '../../img/img1.jpeg';
import sliderTwo from '../../img/img2.jpeg';
import sliderThree from '../../img/img3.jpeg';
import sliderFour from '../../img/img4.jpeg';

// const Thumbnail = ({ arr, image, index }) => {
//     return (<div className="thumbnail">
//         {
//             arr.map((imgsrc, i) => (
//                 <img key={i} height="50" src={imgsrc} onClick={()=>image(i)} className={index===1 ? 'active' : ''}/>
//             ))}
//             </div>
//     )
// }

const SlideImage = ({ imgs }) => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        setIndex(0)
    }, [])

    const next = () => {
        if (index === imgs.length -1){
            setIndex(0)
        }else{
            setIndex(index + 1)
        }
    }
    const prev = () => {
        if (index === 0) {
            setIndex(imgs.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    return ( 
        <div className="slideshow">
            <img className="mainImg" src={imgs[index]} alt="sliders" />
            <div className="actions">
                <button onClick={prev}>Prev</button>
                <button onClick={next}>Next</button>
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
                        <Link to={"/dashboard"}><li>Dashboard</li></Link>
                        <Link to={"/login"}><li>Login</li></Link>
                    </ul>
                </nav>
            </header>

            <main>
                <div className="App">
                    <SlideImage
                        imgs={[
                            sliderOne,
                            sliderTwo,
                            sliderThree,
                            sliderFour
                        ]}
                    />
                </div>
            </main>

            <footer>
                <p>&copy;2022 Siapkenas.com, <span style={{fontStyle:"italic"}}>All rights reserved</span></p>
            </footer>
        </div>
    )
}

export default LandingPage;