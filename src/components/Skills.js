import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLaptop, faTools } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
    return (
       <div className="skills">
           <h1 className="py-5">What I Offer</h1>
               <div className="container">
                   <div className="row justify-content-md-center">
                       <div className="col-md-3 col-sm-6">
                           <div className="box">
                               <FontAwesomeIcon icon= {faCode} size="2x" />
                               <h3>Skills</h3>
                               <ul>
                                   <li>Expert with C#, T-SQL</li>
                                   <li>Experience with Java, HTML, CSS, Javascript, C++</li>
                                   <li>RESTful and Web Services (SOAP)</li>
                                   <li>Relational databases</li>
                                   <li>Software Development Lifecycle</li>
                                   <li>Object-oriented Design</li>
                                   <li>Leadership</li>
                                   <li>Teamwork</li>
                               </ul>
                           </div>
                       </div>
                       {/* - */}
                       <div className="col-md-3 col-sm-6">
                           <div className="box">
                               <FontAwesomeIcon icon={ faLaptop } size="2x" />
                               <h3>Technologies</h3>
                               <ul>
                                   <li>ADO.NET</li>
                                   <li>ASP.NET (Web API, Web Forms)</li>
                                   <li>Microsoft Azure DevOps</li>
                                   <li>Microsoft SQL Server</li>
                                   <li>N-Unit: Unit Test Framework</li>
                                   <li>Moq: Unit Test Framework</li>
                                   <li>Single Sign-On (SSO)</li>
                               </ul>
                           </div>
                       </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                           <div className="box">
                           <FontAwesomeIcon icon={ faTools } size="2x" />
                               <h3>Tools</h3>
                               <ul>
                                   <li>Microsoft Azure DevOps</li>
                                   <li>Git</li>
                                   <li>Visual Studio</li>
                                   <li>Team Foundation Server</li>
                                   <li>Azure App Services</li>
                                   <li>IIS</li>
                               </ul>
                           </div>
                       </div>
                   </div>
               </div>
        </div>
    )
}

export default Skills
