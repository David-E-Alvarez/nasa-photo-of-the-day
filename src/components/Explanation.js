import React from "react";

const Explanation = props => {
    console.log("props in Explanation.js: ", props);
    return <p>{props.explanation}</p>;
}

export default Explanation;