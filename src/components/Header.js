import React from "react"
import Typed from "react-typed";

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>Landon Tomaine</h1>
                <h3>Software Engineer</h3>
                <Typed
                    className="typed-text"
                    strings={["C#", "T-SQL", "RESTful and Web Services (SOAP)", "Relational Databases", "Software Development Lifecycle", "Object-oriented Design", "Leadership", "Teamwork" ]}
                    typedSpeed={35}
                    backSpeed={50}
                    loop
                />
                <a href="mailto: latomaine@live.com" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header
