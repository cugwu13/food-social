import React, { useState } from 'react';
import './sideMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartShopping,
    faChevronRight,
    faCreditCard,
    faFaceGrinHearts,
    faGears,
    faInbox,
    faUser,
    faUserLock,
} from '@fortawesome/free-solid-svg-icons';

export default function SideMenu() {
    const [isActive, setIsActive] = useState(false);

    // Toggle the flip arrow
    const handleToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="menu">
            <div className={`container ${isActive ? 'expand' : null}`}>
                <div className="menu-item">
                    <FontAwesomeIcon icon={faUser} />
                    <p>Account</p>
                </div>
                <div className="menu-item">
                    <FontAwesomeIcon icon={faCreditCard} />
                    <p>Payment Information</p>
                </div>
                <div className="menu-item">
                    <FontAwesomeIcon icon={faCartShopping} />
                    <p>Cart</p>
                </div>
                <div className="menu-item">
                    <FontAwesomeIcon icon={faInbox} />
                    <p>Inbox</p>
                </div>
                <div className="menu-item">
                    <FontAwesomeIcon icon={faFaceGrinHearts} />
                    <p>Send Feedback</p>
                </div>
                <div className="menu-item">
                    <FontAwesomeIcon icon={faGears} />
                    <p>Settings</p>
                </div>
                <div className="menu-item">
                    <FontAwesomeIcon icon={faUserLock} />
                    <p>Sign Out</p>
                </div>
            </div>
            <div className="toggle">
                <FontAwesomeIcon
                    icon={faChevronRight}
                    className={`svg-inline--fa fa-chevron-right ${
                        isActive ? 'flip-arrow' : null
                    }`}
                    onClick={handleToggle}
                />
            </div>
        </div>
    );
}
