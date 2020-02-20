import React from "react";
import { Jumbotron } from 'reactstrap';
const Title = props => {
    console.log("props in Title.js: ", props);

    return (
        <h1 className="display-2">{props.title}</h1>
    )
}

export default Title;