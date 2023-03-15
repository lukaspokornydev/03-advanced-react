import React from 'react';

const UseStateObject = () => {
  const [name, setName] = React.useState("peter")
  const [age, setAge] = React.useState(24)
  const [hobby, setHobby] = React.useState("reading books")

  const displayPerson = () => {
    setName("john")
    setAge(28)
    setHobby("screaming at the computer")
  }  

  return <>
    <h3>{name}</h3>
    <h4>{age}</h4>
    <h5>Enjoys: {hobby}</h5>
    <button className='btn' onClick={displayPerson}>Display</button>
  </>

};

export default UseStateObject;
