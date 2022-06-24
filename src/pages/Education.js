import React from "react";

function Education() {
    return (
        <React.Fragment>
            <div className="min-h-screen">
                <div className="container py-5">
                    <h1 className="text-center mb-5">Education</h1>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-5">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">HSC <span className="h6"> from Edunova  Science Higher Secondary School</span></h5>
                                    <p className="mb-0">APR 2018 - MAY 2020</p>
                                    <small>I've completed my HSC from Edunova Science Higher Secondary School.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold"> Bachelors Of Engineering <span className="h6"> from Silver Oak University Of Technology </span></h5>
                                    <p className="mb-0">OCT 2020 - MAY 2024</p>
                                    <small>I am currently pursuing bachelor's of engineering from Silver Oak University Of Technology.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Education;