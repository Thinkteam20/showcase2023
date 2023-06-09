import React from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import {
    CContainer,
    CCarousel,
    CCarouselItem,
    CImage,
    CCarouselCaption,
} from "@coreui/react";
import img1 from "../assets/imgs/onedream.png";
import img2 from "../assets/imgs/uhak.png";
import img3 from "../assets/imgs/leapin.png";

export default function Slider() {
    return (
        <div
            data-aos='flip-right'
            data-aos-duration='1500'
            data-aos-offset='200'
        >
            <CContainer className='w-100'>
                <h3>The Companies i worked...</h3>
                <CCarousel
                    controls
                    transition='crossfade'
                    interval={(true, 3000)}
                >
                    <CCarouselItem>
                        <CImage
                            className='d-block w-100'
                            src={img1}
                            alt='slide 1'
                            height={340}
                        />
                        <CCarouselCaption className='d-none d-md-block '>
                            <h2 style={{ color: "white" }}>
                                <strong>One Dream Community PTY LTD</strong>
                            </h2>
                        </CCarouselCaption>
                    </CCarouselItem>
                    <CCarouselItem>
                        <CImage
                            className='d-block w-100'
                            src={img2}
                            alt='slide 2'
                            height={340}
                        />
                        {/* <CCarouselCaption className='d-none d-md-block'>
                        <h2 style={{ color: "black" }}>
                            <strong>UHAK STATION</strong>
                        </h2>
                        <h5 style={{ color: "black" }}>
                            Some representative placeholder content for the
                            first slide.
                        </h5>
                    </CCarouselCaption> */}
                    </CCarouselItem>
                    <CCarouselItem>
                        <CImage
                            className='d-block w-100'
                            src={img3}
                            alt='slide 3'
                            height={340}
                        />
                    </CCarouselItem>
                </CCarousel>
            </CContainer>
        </div>
    );
}
