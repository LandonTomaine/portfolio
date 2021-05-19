import React from "react";
import {Link} from "react-scroll";

const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="d-flex">
                        <p>Apopka, Florida</p>
                    </div>
                    <div className="d-flex">
                        <a href="tel: 570-504-4462">570-504-4462</a>
                    </div>
                    <div className="d-flex">
                        <a href="mailto: latomaine@live.com">latomaine@live.com</a>
                    </div>
                    <div className="d-flex">
                        <a href="https://www.linkedin.com/in/landon-tomaine-00771947/" target="new-window">LinkedIn</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-2 col-sm-6">
                    <div className="row">
                        <div className="col">
                            <Link className="footer-nav" smooth={true} to="home" offset={-110}>Home</Link>
                            <br/>
                            <Link className="footer-nav" smooth={true} to="about me" offset={-95}>About Me</Link>
                            <br/>
                            <Link className="footer-nav" smooth={true} to="skills" offset={-95}>What I Offer</Link>
                            <br/>
                            <Link className="footer-nav" smooth={true} to="work history" offset={-95}>Work History</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-3 text-center">
                Copyright&copy;
                {new Date().getFullYear()}&nbsp; All Rights Reserved
            </div>
        </div>
    )
}

export default Footer
