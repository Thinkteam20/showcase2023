import React from "react";
import NavBar from "../common/NavBar";
import AllProjects from "../projects/AllProjects";
import Slider from "../common/Slider";
import "./styles/HomePage.css";
import Article from "../components/Article";
import Footer from "../common/Footer";
import {
    CCallout,
    CAccordion,
    CAccordionItem,
    CAccordionHeader,
    CAccordionBody,
} from "@coreui/react";
import { getDayOfWeek } from "../utils/getDayOfWeek";
import visa from "../assets/imgs/visa.jpeg";
import resume from "../assets/imgs/resume.png";
import qut from "../assets/imgs/qut.jpeg";
import hr from "../assets/curve-hr.svg";

import { INFO } from "../data/user";
import myArticles from "../data/articles";

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
                                {/* <div className='testing'> */}
                                <div className='left-side-title-left'>
                                    <div className='title homepage-title'>
                                        <strong>
                                            HAPPY {dayOfWeek}🎉
                                            {INFO.homepage.greeting}
                                        </strong>
                                    </div>

                                    <p className='title homepage-greeting'>
                                        {INFO.homepage.title}
                                    </p>
                                </div>

                                <Slider />
                                <div class='text-teal text-opacity-75'>
                                    <CCallout color='dark'>
                                        {INFO.homepage.description}
                                        {/* </div> */}
                                    </CCallout>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='divider'>
                        <div>
                            <h3 className='divider-title'>01.</h3>
                            <h3>Hiring Info</h3>
                        </div>
                        <div className='divider-line'>
                            <img src={hr} alt='hr' className='hrline' />
                        </div>
                    </div>
                    <div className='info'>
                        <div className='blocks'>
                            <div
                                className='block'
                                data-aos='fade-up'
                                data-aos-duration='500'
                                data-aos-offset='100'
                            >
                                <img src={visa} alt='' />
                                <div class='block__description'>
                                    <h3>485VISA</h3>
                                    <span>More Info below</span>
                                </div>
                            </div>
                            <div
                                className='block'
                                data-aos='fade-up'
                                data-aos-duration='500'
                                data-aos-offset='100'
                            >
                                <img src={resume} alt='' />
                                <div class='block__description'>
                                    <h3>DOWNLOAD RESUME</h3>
                                    <span>
                                        <a href=''>DOWNLOAD</a>
                                    </span>
                                </div>
                            </div>
                            <div
                                className='block'
                                data-aos='fade-up'
                                data-aos-duration='500'
                                data-aos-offset='100'
                            >
                                <img src={qut} alt='' />
                                <div class='block__description'>
                                    <h3>BRISBANE,QUEENSLAND</h3>
                                    <span>
                                        Happy to relocate for new position
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <CAccordion flush>
                            <CAccordionItem itemKey={1}>
                                <CAccordionHeader>VISA</CAccordionHeader>
                                <CAccordionBody>
                                    <strong>
                                        This is the first item's accordion body.
                                    </strong>{" "}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{" "}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </CAccordionBody>
                            </CAccordionItem>
                            <CAccordionItem itemKey={2}>
                                <CAccordionHeader>LOCATION</CAccordionHeader>
                                <CAccordionBody>
                                    <strong>
                                        This is the second item's accordion
                                        body.
                                    </strong>{" "}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{" "}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </CAccordionBody>
                            </CAccordionItem>
                            <CAccordionItem itemKey={3}>
                                <CAccordionHeader>RESUME</CAccordionHeader>
                                <CAccordionBody>
                                    <strong>
                                        This is the second item's accordion
                                        body.
                                    </strong>{" "}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{" "}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </CAccordionBody>
                            </CAccordionItem>
                        </CAccordion>
                    </div>

                    <div className='homepage-container'>
                        <div className='divider'>
                            <div>
                                <h3 className='divider-title'>02.</h3>
                                <h3>Projects</h3>
                            </div>
                            <div className='divider-line'>
                                <img src={hr} alt='hr' className='hrline' />
                            </div>
                        </div>

                        <div className='homepage-projects'>
                            <AllProjects />
                        </div>

                        <div className='homepage-after-title'>
                            <div className='divider'>
                                <div>
                                    <h3 className='divider-title'>03.</h3>
                                    <h3>Award and Certificate</h3>
                                </div>
                                <div className='divider-line'>
                                    <img src={hr} alt='hr' className='hrline' />
                                </div>
                            </div>
                            <div className='homepage-articles'>
                                {myArticles.map((article, index) => (
                                    <div
                                        className='homepage-article'
                                        key={(index + 1).toString()}
                                    >
                                        <Article
                                            key={(index + 1).toString()}
                                            date={article().date}
                                            title={article().title}
                                            description={article().description}
                                            link={"/article/" + (index + 1)}
                                        />
                                    </div>
                                ))}
                            </div>
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
