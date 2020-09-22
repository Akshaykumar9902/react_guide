import React from 'react';

const person = (props)=>{
return (
<div>
    <p>I'm {props.name} and Iam {props.age} Year old </p>
<p>{props.children}</p>
</div>
)};

export default person;