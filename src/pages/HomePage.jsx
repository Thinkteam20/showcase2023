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

export default function HomePage() {
    return (
        <React.Fragment>
            <div className='page-content'>
                <NavBar active='home' />
                <div className='content-wrapper'>
                    <div className='homepage-logo-container'>
                        <Slider />
                    </div>
                    <div className='homepage-container'>
                        <div className='homepage-projects'>
                            <AllProjects />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
