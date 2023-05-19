import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import "./styles/Footer.css";

const accounts = [
    {
        url: "https://www.linkedin.com/in/philip-jung-b546181a3",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin color='#9bdaf3' size={20} />,
    },

    {
        url: "mailto:teamgrey10@likelion.org",
        label: "Mail sangpil",
        type: "red",
        icon: <FiMail color='feb2b2' size={20} />,
    },
];

export default function Footer() {
    return (
        <React.Fragment>
            <div className='footer'>
                <div className='footer-links'>
                    <div>
                        {accounts.map((details) => (
                            <a href='' className='link'>
                                {details.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className='footer-credits'>
                    <div className='footer-credits-text'>
                        © {new Date().getFullYear()} Sangpil Jung{" "}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
