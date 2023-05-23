import React, { useEffect } from "react";
import "./styles/About.css";
import { INFO } from "../data/user";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";
import aboutimg from "../assets/imgs/about.jpg";
import Works from "../components/Works";

export default function About() {
    useEffect(() => {
        document.title = `About | ${INFO.main.title}`;
        window.scrollTo(0, 0);
    }, []);

    return (
        <React.Fragment>
            <div className='page-content'>
                <NavBar active='about' />
                <div className='content-wrapper'>
                    <div className='about-container'>
                        <div className='about-main'>
                            <div className='about-right-side'>
                                <div className='title about-title'>
                                    {INFO.about.title}
                                </div>

                                <div className='subtitle about-subtitle'>
                                    {INFO.about.description}
                                </div>
                            </div>

                            <div className='about-left-side'>
                                <div className='about-image-container'>
                                    <div className='about-image-wrapper'>
                                        <img
                                            src={aboutimg}
                                            alt='about'
                                            className='about-image'
                                        />
                                    </div>
                                    {/* <a href='/' className='not-found-link'>
                                        Linkedin
                                        <AiFillLinkedin size={40} />
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='about-socials'>
                        <Works />
                    </div>
                    <div className='page-footer'>
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
