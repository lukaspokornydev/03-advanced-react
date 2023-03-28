import React from 'react';

const UseStateGotcha = () => {
  const [num, setNum] = React.useState(0);

  function add() {setNum(prevNum => prevNum + 1)}
  function subtract() {setNum(prevNum => prevNum - 1)}
  function zero() {setNum(0)
}
  
  return (
    <>
    <h2>{num}</h2>
    <button className='btn' onClick={add}>+</button>
    <button className='btn' onClick={zero}>0</button>
    <button className='btn' onClick={subtract}>-</button>
    </>
  )
};

export default UseStateGotcha;
