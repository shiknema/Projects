import React from "react";
import './../style.css'

const DisplayCourse = (props) => {
    //console.log(props);
    const showCourseData = props.displayData.map((data) => {
        return (
            <div className ='wholecard'>
                <div className="col">
                    <div className="card h-50 card-img-top" >
                        <img src={data.img} alt="course Info" height="250px" width ="100%" style={{visibility: "0.7"}} />
                        <div className="card-body">
                            <h5 className="card-title">{data.name}</h5>
                            <p className="card-text"> {data.details} </p>
                        </div>
                        <div className="card-footer">
                            <small  className="text-muted"> <b>{data.fee} </b></small>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {showCourseData}
        </div>
    )
}
export default DisplayCourse;