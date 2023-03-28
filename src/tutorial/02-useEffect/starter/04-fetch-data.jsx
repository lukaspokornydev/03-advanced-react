import { useState, useEffect } from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
    const FetchData = async()=>{
      const response = await fetch(url);
      const users = await response.json()
      console.log(users)
    }
    FetchData()

  }, [])

  useEffect(() => {
    console.log("Karla")
  }, 5000)


  const visibleUsers = users.map((user) => {
    return (
      {user}
    )
  })
  console.log(visibleUsers)
};
export default FetchData;
