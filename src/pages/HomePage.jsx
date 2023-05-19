import React, { useState, useEffect } from "react";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faGithub,
    faStackOverflow,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import NavBar from "../common/NavBar";
import AllProjects from "../projects/AllProjects";
import Slider from "../common/Slider";
import "./styles/HomePage.css";
import { INFO } from "../data/user";
import Footer from "../common/Footer";
import { CBadge, CToast, CToastHeader, CToastBody } from "@coreui/react";
import { getDayOfWeek } from "../utils/getDayOfWeek";

export default function HomePage() {
    const now = new Date();
    const dayOfWeek = getDayOfWeek(
        now.getDate(),
        now.getMonth(),
        now.getFullYear()
    );
    return (
        <React.Fragment>
            <div className='page-content'>
                <NavBar active='home' />
                <div className='content-wrapper'>
                    <div className='homepage-logo-container'>
                        <div className='homepage-first-area'>
                            <div className='homepage-first-area-left-side'>
                                <div className='testing'>
                                    <div className='left-side-title-left'>
                                        <div className='title homepage-title'>
                                            <strong>
                                                HAPPY {dayOfWeek}🎉
                                                {INFO.homepage.greeting}
                                            </strong>
                                        </div>
                                        <div className='badges'>
                                            <CBadge color='primary' ml-2>
                                                REACT
                                            </CBadge>
                                            <CBadge color='success'>
                                                DOTNET
                                            </CBadge>
                                            <CBadge color='warning'>
                                                NODE.js
                                            </CBadge>
                                            <CBadge color='dark'>
                                                JS Libraries | Frameworks
                                            </CBadge>
                                        </div>
                                        <p className='title homepage-greeting'>
                                            {INFO.homepage.title}
                                        </p>
                                    </div>
                                    <div className='left-side-title-right'>
                                        <CToast
                                            animation={false}
                                            autohide={false}
                                            visible={true}
                                        >
                                            <CToastHeader closeButton>
                                                <svg
                                                    className='rounded me-2'
                                                    width='20'
                                                    height='20'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    preserveAspectRatio='xMidYMid slice'
                                                    focusable='false'
                                                    role='img'
                                                >
                                                    <rect
                                                        width='100%'
                                                        height='100%'
                                                        fill='#007aff'
                                                    ></rect>
                                                </svg>
                                                <div className='fw-bold me-auto'>
                                                    DOWNLOAD RESUME
                                                </div>
                                                <small>7 min ago</small>
                                            </CToastHeader>
                                            <CToastBody>
                                                Click here to quickly download
                                                my Updated Resume! HERE
                                            </CToastBody>
                                        </CToast>
                                    </div>
                                </div>

                                <Slider />
                                <div className='subtitle homepage-subtitle'>
                                    {INFO.homepage.description}
                                </div>
                            </div>
                            {/* <div className='homepage-first-area-right-side'>
                                <h1>test</h1>
                            </div> */}
                        </div>
                    </div>
                    <div className='homepage-container'>
                        <div className='homepage-projects'>
                            <AllProjects />
                        </div>
                        <div className='page-footer'>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
