import { data } from '../../../data'
import React from 'react'; 

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)

  const removeItem = (id) => {
    const newPeople = people.filter((person)=>person.id !== id)
      setPeople(newPeople) 
  }
  
  const removeAll = () => {setPeople([]);
  };

  return (
    <div>
      {people.map((person)=>{
        const {id, name} = person
        return (
        <div key={id}>
          <h4>{name}</h4>
          <button type='button' className='btn' onClick={ () => removeItem(id)}>bye</button>
          </div>
        )
      })}
         <button onClick={removeAll}>bye All</button>
    </div>
  )
}  


//   const removeItem = (id) => {
//     const newPeople = people.filter((person) => person.id !== id);
//     setPeople(newPeople)
//   }
//   const clearAllItems = () => {setPeople([])} //prazdna array, tj. vymaze vse

//   return (
//    <div>
//     {people.map((person) => {
//       const { id, name } = person;
//       return (
//       <div key={id}>
//         <h4>{name}</h4>
//         <button type='button' onClick={() => removeItem(id)}>remove</button>
//       </div>
//       );
//     })}
//     <button type='button' className='btn' onClick={clearAllItems}>clear items</button>
//   </div>
//   )
// };

export default UseStateArray;