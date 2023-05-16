import React from "react";
import "./styles/Slider.css";
import slide1 from "../assets/imgs/m_slide200.png";
import slide2 from "../assets/imgs/m_slide201.png";
import slide3 from "../assets/imgs/m_slide202.png";
import slide4 from "../assets/imgs/slide200.png";
import slide5 from "../assets/imgs/slide201.png";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import glide from "@glidejs/glide";

export default function Slider() {
    return (
        <>
            <div className='container'>
                <Glider
                    className='glider-container'
                    draggable
                    hasDots
                    slidesToShow={1}
                    scrollLock
                    hasArrows
                    arrows={{
                        prev: "#buttonPrev",
                        next: "#buttonNext",
                    }}
                >
                    <div className='slide'>
                        <div className='slide__description__left'>
                            {/* <p>One Dream Community</p> */}
                        </div>

                        <img src={slide4} alt='' />
                    </div>
                    <div className='slide'>
                        <div className='slide__description__left'>
                            <p>One Dream Community</p>
                        </div>

                        <img src={slide2} alt='' />
                    </div>
                    <div className='slide'>
                        <div className='slide__description__left'>
                            <p>One Dream Community</p>
                        </div>

                        <img src={slide1} alt='' />
                    </div>
                </Glider>
            </div>
        </>
    );
}
