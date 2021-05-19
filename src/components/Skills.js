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
                               <div className="circle"><FontAwesomeIcon className="icon" icon= {faCode} size="2x" /></div>
                               <h3>Skills</h3>
                               <ul>
                                   <li>Expert with C#, T-SQL</li>
                                   <li>Some Java, HTML, CSS, Javascript, C++</li>
                                   <li>RESTful/Web Services (SOAP)</li>
                                   <li>Relational databases</li>
                                   <li>Software Development Lifecycle</li>
                                   <li>Object-oriented Design</li>
                                   <li>Leadership & Teamwork</li>
                               </ul>
                           </div>
                       </div>
                       {/* - */}
                       <div className="col-md-3 col-sm-6">
                           <div className="box">
                               <div className="circle"><FontAwesomeIcon className="icon" icon={ faLaptop } size="2x" /></div>
                               <h3>Technologies</h3>
                               <ul>
                                   <li>ADO.NET</li>
                                   <li>ASP.NET (Web API, Web Forms)</li>
                                   <li>Microsoft Azure DevOps</li>
                                   <li>Microsoft SQL Server</li>
                                   <li>N-Unit: Unit Test Framework</li>
                                   <li>Moq: Unit Test Framework</li>
                                   <li>Single Sign-On (SSO)</li>
                                   <li>IIS</li>
                                   <li></li>
                               </ul>
                           </div>
                       </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                           <div className="box">
                           <div className="circle"><FontAwesomeIcon className="icon" icon={ faTools } size="2x" /></div>
                               <h3>Tools</h3>
                               <ul>
                                   <li>Microsoft Azure DevOps</li>
                                   <li>Git</li>
                                   <li>Visual Studio</li>
                                   <li>Microsoft SQL Server Management Studio</li>
                                   <li>Team Foundation Server</li>
                                   <li>Azure App Services</li>
                                   <li></li>
                                   <li></li>
                               </ul>
                           </div>
                       </div>
                   </div>
               </div>
        </div>
    )
}

export default Skills
