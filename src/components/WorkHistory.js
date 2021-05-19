import React from 'react'

const WorkHistory = () => {
    return (
        <div className="workhistory">
            <div className="d-flex justify-content-center my-5">
                <h1>Work History</h1>
            
            </div>
            <div className="container workhistory-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>09/20 - Current</h3>
                        <p>
                            <h4>Senior Software Engineer</h4>
                            <ul>
                                <li>Collaborated with cross-functional development team to analyze potential
                                    system solutions based on evolving client requirements.</li>
                                <li>
                                    Served as defactor Software Lead for 6-person scrum team to implement several features, including:
                                    <ul>
                                        <li>Third-party financial investment solution into core health care management platform.
                                            Collaborated with 4 other teams.
                                        </li>
                                        <li>New method for clients to fund Health-savings accounts. Collaborated with 3 other teams.</li>
                                    </ul>
                                </li>
                                <li>Suggested and helped implement new processes that improve team workflow in Agile environment.</li>
                                <li>Trained and mentored other developers, teaching skills in object-oriented design, C#/.NET, SQL,
                                    performance-tuning and scalability.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>02/2019 - 09/2020</h3>
                        <p>
                            <h4>Software Engineer</h4>
                            <ul>
                                <li>Reviewed project specifications and designed technology solutions that met or
                                    exceeded performance expectations.
                                </li>
                                <li>Led team alongside QA Manager of US-based and offshore developers and QA engineers 
                                    ranging from 8-17 engineers from junior to senior roles.
                                </li>
                                <li>Coordinated 5 minor releases within company across several 
                                    teams (Operations, Release Engineering, Service Delivery, Engineering).
                                </li>
                                <li>Implemented processes and procedures for engineers on teamto improve performance
                                    and efficiency, leading to decrease of average age of open defects by 20%.
                                </li>
                                <li>Analyzed and provided risk assessments on work items based on deep knowledge of platform's software.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>10/2018 - 02/2019</h3>
                        <p>
                            <h4>Sustaining Software Engineer</h4>
                            <ul>
                                <li>Provided tier 3 level support internally and externally for software-as-a-service 
                                    products relating to Consumer Directed Healthcare.
                                </li>
                                <li>
                                Researched and analyzed software/service issues relating to code defects and 
                                specific client setups involving mostly C#, SSO, SOAP and Rest services, EDI, and T-SQL.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>10/2017 - 10/2018</h3>
                        <p>
                            <h4>Technical Support Analyst</h4>
                            <ul>
                                <li>Provided tier 1 level support internally and externally for software-as-a-service 
                                    products relating to Consumer Directed Healthcare.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkHistory
