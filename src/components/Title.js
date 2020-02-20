import React from "react";

const Title = props => {
    console.log("props in Title.js: ", props);
    return <h1>{props.title}</h1>;
}

export default Title;