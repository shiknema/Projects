import React from "react";

const DisplayUserInfo = (props) => {

    const displayData = props.userInfo.map((data) => {
        return (
            <div key={data.id}>
                <h4>{data.name}</h4>
            </div>
        )
    })
    return (
        <>
            {displayData}
        </>
    )
}
export default DisplayUserInfo;