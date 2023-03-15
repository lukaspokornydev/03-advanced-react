import React from 'react';

const UseStateObject = () => {
  // const [name, setName] = React.useState("peter")
  // const [age, setAge] = React.useState(24)
  // const [hobby, setHobby] = React.useState("reading books")

    // refactoring this ↑ to this ↓  

  const [person, setPerson] = React.useState({
    name:"peter",
    age: 24,
    hobby: "reading books",
  });

  const displayPerson = () => {
    // setName("john")
    // setAge(28)
    // setHobby("screaming at the computer")

      // again
      
    setPerson({ name:"john", age:28, hobby:"screaming at the computer"});
  };  

  return (
  <>
    <h3>{person.name}</h3>
    <h4>{person.age}</h4>
    <h5>Enjoys: {person.hobby}</h5>
    <button className='btn' onClick={displayPerson}>Display</button>
  </>

)};

export default UseStateObject;
