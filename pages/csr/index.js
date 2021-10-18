import axios from "axios"
import { useState, useEffect } from "react"
const getDataUsers = () => {
    return new Promise ((resolve, reject) => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            resolve(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    })
}

const Csr = () => {
const [user, setUsers] = useState([])
useEffect(() => {
    getDataUsers().then((result) => {
        setUsers(result)
    })
}, [])
    return (
        <div>
            <h1>Client Side Rendering</h1>
            <dic>{
                user.length <= 0 ? (
                    <div>loading</div>
                ):(
                    user.map((e, i) => 
                        <div key={i}>{e.name}</div>
                    )
                )
                }</dic>
        </div>
    )
}

export default Csr