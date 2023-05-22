import React from "react";
import Card1 from "../common/Card";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import odc from "../assets/imgs/odc-icon.png";
import ust from "../assets/imgs/uhak.png";
import leapin from "../assets/imgs/leapin.png";
import "./Works.css";

export default function Works() {
    return (
        <div className='works'>
            <Card1
                icon={faBriefcase}
                title='Work'
                body={
                    <div className='works-body'>
                        <div className='work'>
                            <img
                                src={odc}
                                alt='facebook'
                                className='work-image'
                            />
                            <div className='work-title'>
                                One Dream Community
                            </div>
                            <div className='work-subtitle'>
                                Full-Stack Web developer
                            </div>
                            <div className='work-duration'>2022 - 2023</div>
                        </div>

                        <div className='work'>
                            <img
                                src={ust}
                                alt='twitter'
                                className='work-image'
                            />
                            <div className='work-title'>Uhak Station</div>
                            <div className='work-subtitle'>
                                Front-End Developer
                            </div>
                            <div className='work-duration'>2021 - 2022</div>
                        </div>
                        <div className='work'>
                            <img
                                src={leapin}
                                alt='twitter'
                                className='work-image'
                            />
                            <div className='work-title'>Uhak Station</div>
                            <div className='work-subtitle'>
                                Front-End Developer(Internship)
                            </div>
                            <div className='work-duration'>2020 - 2021</div>
                        </div>
                    </div>
                }
            />
        </div>
    );
}
