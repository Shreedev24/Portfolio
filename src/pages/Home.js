import React from "react";
import avtar from "./../images/logo.png";

function Home() {
    return (
        <div className="min-h-screen">
            <div className="container pt-5 d-flex flex-column align-items-center">
                <img src={avtar} width={200} alt="Rohit Bhadani" />
                <h1>Shreedev Ezhava</h1>
                <h4>(Software Engineer)</h4>
                <p className="text-center border-bottom pb-3">My name is Shreedev Ezhava and I am currently  pursuing Btech IT from Silver Oak University. And have a huge amount of passion for technologies. As a student, I have a long way to go for finding the right passion of interest.</p>
                <p className="text-center">
                    <span className="d-mobile-block">Email: shreedevezhava@gmail.com</span>
                    <span className="d-none d-web-contents"> | </span>
                    <span className="d-mobile-block">Phone: +91-6351119064</span>
                </p>
                <p className="text-center">Address: 155,Gokul Society Nr.Biwi Talav,Vatva,Isanpur, Ahmedabad. IN - 382440</p>
            </div>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title fw-bold pb-3">Skills</h5>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div>
                                            <p className="mb-0">HTML</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "70%" }}>70%</div>
                                            </div>
                                        </div>
                                        <div className="pt-3">
                                            <p className="mb-0">CSS</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "60%" }} >60%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            <p className="mb-0">English</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "80%" }}>80%</div>
                                            </div>
                                        </div>
                                        <div className="pt-3">
                                            <p className="mb-0">REACTJS</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "60%" }} >60%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title fw-bold pb-3">Hobbies</h5>
                                <span class="badge bg-primary me-3 mb-3 p-2">Music</span>
                                <span class="badge bg-secondary me-3 mb-3 p-2">Anime</span>
                                <span class="badge bg-success me-3 mb-3 p-2">Movies/Series</span>
                                <span class="badge bg-danger me-3 mb-3 p-2">Reading</span>
                                <span class="badge bg-warning text-dark me-3 mb-3 p-2">Photography</span>
                                <span class="badge bg-info text-dark me-3 mb-3 p-2">Video Games</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;