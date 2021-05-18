import React from "react"
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Software Engineer</h1>
                <Typed
                    className="typed-text"
                    strings={["C#", "T-SQL", "SAFE - Scrum/Agile", "RESTful APIs", "ASP.NET Web Forms", "ADO.NET", "Leadership" ]}
                    typedSpeed={30}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header
