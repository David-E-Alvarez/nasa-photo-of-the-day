import React from "react";

const Image = props => {
    console.log("props in Image.js: ", props);
    return <img src={props} alt="NASA pic of day"/>
}

export default Image;