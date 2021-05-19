import React from "react";
import author from "../me-keyboard.jpg";

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author..."/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>
                        Hello! My name is Landon. I am a results-oritented and innovative Software Engineer with over 2 years of professional experience.
                        I can easily communicate complex technical requirements to non-technical stakeholders and have an excellent leadership record of
                        leading development teams in enterprise-wide development projects. I am experienced with high-volume transaction processing with
                        distributed applications.</p>

                        <p>My main focus is in the .NET stack with high proficiency in C# and T-SQL.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
