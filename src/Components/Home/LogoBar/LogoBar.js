import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airBnb from '../../../images/logos/airbnb.png';


const LogoBar = () => {
    return (
        <section className="container text-center">
            <div style={{ marginTop: '100px' }} className="row d-flex justify-content-center align-items-center">
                <div className="col-md-2 col-sm-4 mb-3">
                    <div>
                        <img style={{ height: '40px' }} className="img-fluid" src={slack} alt="" />
                    </div>
                </div>
                <div className="col-md-2 col-sm-4 mb-3">
                    <div>
                        <img style={{ height: '42px' }} className="img-fluid" src={google} alt="" />
                    </div>
                </div>
                <div className="col-md-2 col-sm-4 mb-3">
                    <div>
                        <img style={{ height: '35px' }} className="img-fluid" src={uber} alt="" />
                    </div>
                </div>
                <div className="col-md-2 col-sm-4 mb-3">
                    <div>
                        <img style={{ height: '60px' }} className="img-fluid" src={netflix} alt="" />
                    </div>
                </div>
                <div className="col-md-2 col-sm-4 mb-3">
                    <div>
                        <img style={{ height: '40px' }} className="img-fluid" src={airBnb} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoBar;