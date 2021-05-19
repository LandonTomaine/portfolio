import React from 'react'

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
                            <a className="footer-nav">Home</a>
                            <br/>
                            <a className="footer-nav">About Me</a>
                            <br/>
                            <a className="footer-nav">What I Offer</a>
                            <br/>
                            <a className="footer-nav">Work History</a>
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
