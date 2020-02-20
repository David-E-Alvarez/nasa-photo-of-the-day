import React from "react";
import styled from "styled-components";
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;
const StyledImage = styled.img`
    margin-bottom: 30px;
    clip-path: circle(50% at 50% 50%);
`
const Image = props => {
    //if(!props.hdurl) return <h3>Loading...</h3>
    //return <img alt="NASA Rocks!" src={props} /> 
    return <StyledImage key={props.id} alt="NASA pic of day" src={props.url}/>   
  
}

export default Image;