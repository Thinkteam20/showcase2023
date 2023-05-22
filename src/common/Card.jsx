import React from "react";
import "./styles/Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card(props) {
    const { icon, title, body } = props;
    return (
        <div className='card1'>
            <div className='card-container'>
                <div className='card-header'>
                    <div className='card-icon'>
                        <FontAwesomeIcon icon={icon} />
                    </div>
                    <div className='card-title'>{title}</div>
                </div>
                <div className='card-body'>
                    <div className='card-text'>{body}</div>
                </div>
            </div>
        </div>
    );
}
