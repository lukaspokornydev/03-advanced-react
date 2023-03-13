

const ErrorExample = () => {
  
  const [count, setCount] = React.useState(0)
  
  function add(){
    setCount
  }
  
  return (
    <div>
        <h2>{count}</h2>
        <button type="button" onClick={add} className="btn">Add</button>
    </div>
   
    )
};

export default ErrorExample;
