import "../styles/GreenHeader.css";
import React from "react";
import Clock from 'react-live-clock';

import headerLines from "../images/headerLines.png"
import battery from "../images/battery.png";
import service from "../images/service.png";
import wifi from "../images/Wi-Fi.png";
import dots from "../images/dots.png"
import backArrow from "../images/backArrow.png"

export function GreenHeader({ children }) {
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
              <img src={dots} alt="dots" />
            </div>
          </div>
          <img src={headerLines} className="headerLines"/>
            {children}
        </div>
  )
}