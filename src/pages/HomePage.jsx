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
import pdf from "../assets/resume.pdf";

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
                                    <span>
                                        <a
                                            href='https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-graduate-485/post-study-work'
                                            className='info-link'
                                        >
                                            More Info
                                        </a>
                                    </span>
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
                                        <a href={pdf} className='info-link'>
                                            DOWNLOAD
                                        </a>
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
                                    <h3>MAJOR</h3>
                                    <span>
                                        Bachelor of Information Technology
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
                                    <img
                                        src='https://media.licdn.com/dms/image/D5635AQFx0pNWGHwUdA/profile-framedphoto-shrink_400_400/0/1683174456058?e=1685422800&v=beta&t=X4yEaolM9_fZlNE31U94p6TlAGOJmDwIxbN5dX8K6WY'
                                        alt=''
                                        className='work-image'
                                    />{" "}
                                    <br />
                                    <strong>
                                        I am currently holdning an Subclass 485
                                        VISA
                                    </strong>{" "}
                                    It is Post-Study Work stream This visa is
                                    for international students who have recently
                                    graduated with a degree from an Australian
                                    institution. It lets you live, work and
                                    study in Australia, temporarily.
                                    <br />{" "}
                                    <code>expire data:December 2024</code>
                                </CAccordionBody>
                            </CAccordionItem>
                            <CAccordionItem itemKey={2}>
                                <CAccordionHeader>LOCATION</CAccordionHeader>
                                <CAccordionBody>
                                    <img
                                        src='https://media.licdn.com/dms/image/D5635AQFx0pNWGHwUdA/profile-framedphoto-shrink_400_400/0/1683174456058?e=1685422800&v=beta&t=X4yEaolM9_fZlNE31U94p6TlAGOJmDwIxbN5dX8K6WY'
                                        alt=''
                                        className='work-image'
                                    />{" "}
                                    <br />
                                    <strong>Brisbane,QLD</strong> “I’m happy to
                                    consider relocating if the job’s a good fit.
                                    Also I am open to an opportunity remote work
                                    environment or out of the office in Brisbane
                                    I’d love to discuss that as well.{" "}
                                    <code>
                                        Preffered locations: Brisbane, Gold
                                        Coast, Perth, Tasmania{" "}
                                    </code>
                                </CAccordionBody>
                            </CAccordionItem>
                            <CAccordionItem itemKey={3}>
                                <CAccordionHeader>EDUCATION</CAccordionHeader>
                                <CAccordionBody>
                                    <img
                                        src='https://media.licdn.com/dms/image/D5635AQFx0pNWGHwUdA/profile-framedphoto-shrink_400_400/0/1683174456058?e=1685422800&v=beta&t=X4yEaolM9_fZlNE31U94p6TlAGOJmDwIxbN5dX8K6WY'
                                        alt=''
                                        className='work-image'
                                    />{" "}
                                    <br />
                                    <strong>
                                        Queensland University of Technology
                                    </strong>{" "}
                                    Bachelor of Information Technology, Major:
                                    Computer Science.{" "}
                                    <code>Graduated in August,2021</code>
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
