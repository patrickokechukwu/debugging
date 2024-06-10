import { useEffect, useState } from "react"

const UserList = () => {
    const [userList, setUserList] = useState([])

    // handel fetch mock data
    const fetchData = async () => {
        const res = await fetch('http://dummyjson.com/users')
        .then((res) => res.json())
        .then((data) console.log(data));
    };

    useEffect(() => {
        fetchData()
    }, []);
  return (
    <div>UserList</div>
  )
}

export default UserList