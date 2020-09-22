import React, { useState } from 'react';
import Person from './Person/Person';

import './App.css';

const app=props=> {
   const [personState , setPersonState]= useState({
      Person : [
        {name:"Akshay",age:26},
        {name:"Max",age:28},
        {name:"Manu",age:28}
      ],
    otherState: 'some other value'
    });
    const [otherState,setOtherState]=useState('Some other value....s');
    console.log(personState,otherState);
    const switchNameHandler=()=>{
      console.log('Was clicked');
      setPersonState({   
        Person : [
        {name:"AkshayKumar",age:26},
        {name:"Max",age:28},
        {name:"Manu",age:28}
      ],
      otherState:personState.otherState
     
      })
     
     }
  
    return (
      <div className="App">
       <h1>Hi I'm react app</h1>
       <p>This is really working!</p>
       
       <button type="button" onClick={switchNameHandler} >Switch Name</button>
       
       <Person name={personState.Person[0].name} age={personState.Person[0].age}/>
       <Person name={personState.Person[1].name} age={personState.Person[1].age}>My Hobbies: Racing</Person>
       <Person name={personState.Person[2].name} age={personState.Person[2].age}>{personState.otherState}</Person>
      </div>
    );
    
  
}

export default app;

