import React from 'react';
// import './Person.css';
import styled from 'styled-components';


const StyledDiv = styled.div`

text-align: center;
width: 60%;
margin: 20px;
border: 1px solid #eee;
box-shadow: 0 2px 3px #ccc;
padding: 16px;
margin-left: auto;
margin-right: auto;

@media (min-width: 500px) {

width : '450px',

}
`;

const person = (props)=>{
  
return (

<StyledDiv>

    <p onClick={props.click}>I'm {props.name} and Iam {props.age} Year old </p>
<p>{props.children}</p>
<input type="text" onChange={props.changed} value={props.name}/>
</StyledDiv>
)};

export default person;