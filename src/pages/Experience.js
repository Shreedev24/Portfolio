import React, { useEffect } from "react";

function Experience() {

    // const [experience, setExperience] = React.useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:3001/")
    //         .then(res => res.json())
    //         .then(data => {
    //             setExperience(data);
    //         });
    // }, []);

    let experience = [
        {
            title: "Internship ",
            company: "Coding Gujju",
            date: "6th June 2022 - 24th June 2022",
            description: "I did my internship at coding Gujju. I thoroughly enjoyed my internship this summer and now have very valuable experience under my belt. I know this will help when looking for jobs and needing references. I was dreading it in the beginning, but now I am so happy it was required. As much as the curriculum changes, I hope that class remains constant."
        },
        
    ]


    return (
        <React.Fragment>
            <div className="min-h-screen">
                <div className="container py-5">
                    <h1 className="text-center mb-5">Experience</h1>


                    {experience.map((item, index) => (
                        <div className="row" key={index}>
                            <div className="col-md-6 offset-md-3">
                                <div className="card mb-5">
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">{item.title} <span className="h6">at {item.company}</span></h5>
                                        <p className="mb-0">{item.date}</p>
                                        <small>{item.description}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </React.Fragment>
    );
}

export default Experience;