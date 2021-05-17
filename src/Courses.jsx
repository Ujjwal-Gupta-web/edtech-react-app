import React from 'react';

//returns the main structure of courses page
function Courses() {
    return (<>
        <div id="courses-page-main" className="flex-c-c">
            <div>Courses</div>
            <img src="#" alt="#" />
        </div>
        <div id="courses-available">
            <div id="select-courses">
                <div id="type-1">Web</div>
                <div id="type-2">Mobile</div>
                <div id="type-3">Programming</div>

            </div>
            <br /><br />
            <div id="course-detail">
                Click on any course and know about the course and faculty members
            </div>
            <div id="fac-head"></div>
            <div id="fac-detail">
            </div>
            <div></div>
        </div>
    </>);
}

// returns card that contain courses details
function Card(props) {
    return (
        <>

            <div className="type-card">
                <img src={props.imgsrc} alt="#" />
                <div className="type-card-content">
                    <h3>{props.coursename}</h3>
                    <p>{props.desc}</p>
                    <h4>{props.price}</h4>
                </div>
            </div>

        </>
    );
}


//returns faculty details
function Teachers(props) {
    return (
        <>

            <div id="faculty">
                <img src={props.image} alt="#" />
                <h3>{props.name}</h3>
                <p>{props.qual}</p>
            </div>

        </>
    );
}

export { Courses, Card, Teachers };

