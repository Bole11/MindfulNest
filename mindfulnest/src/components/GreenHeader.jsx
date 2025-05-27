import "../styles/GreenHeader.css";
import Clock from 'react-live-clock';

import headerLines from "../images/headerLines.png"
import battery from "../images/battery.png";
import service from "../images/service.png";
import wifi from "../images/Wi-Fi.png";
import dots from "../images/dots.png"
import backArrow from "../images/backArrow.png"
import unFavourite from "../images/favourite.png";
import favourite from "../images/clickedFavourite.png"
import about from "../images/about.png";
import { useState } from "react";

export function GreenHeader({ children, onToggleAbout }) {
  const [heart, setHeart] = useState(false);

  const handleHeartClick = () => {
    setHeart(prev => !prev);
    };

  return (
        <div className="gh-content">
          <div className="gh-status-bar">
            <div className="clock-wrapper">
              <Clock format="HH:mm" ticking={true} timezone={"Europe/Belgrade"} />
            </div>
            <div className="status-wrapper">
              <img src={service} alt="service" />
              <img src={wifi} alt="wifi" />
              <img src={battery} alt="battery" />
            </div>
            <div className="arrow-wrapper">
              <img src={backArrow} alt="arrowback" />
            </div>
            <div className="dots-wrapper">
              <button className="gh-button">
                <button className="gh-button" onClick={onToggleAbout}>
                  <img src={about} alt="dots" />
                </button>
              </button>
              <button className="gh-button" onClick={handleHeartClick}>
                <img src={heart ? favourite : unFavourite} alt="heart" />
              </button>
            </div>
          </div>
          <img src={headerLines} className="headerLines"/>
            {children}
        </div>
  )
}