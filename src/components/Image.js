import React from "react";

const Image = props => {
    //if(!props.hdurl) return <h3>Loading...</h3>
    //return <img alt="NASA Rocks!" src={props} /> 
    return <img key={props.id} alt="NASA pic of day" src={props.url}/>   
  
}

export default Image;