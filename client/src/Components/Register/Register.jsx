import { useState } from "react"
import { createUser } from "../../Redux/action"
import { useDispatch } from "react-redux"

const Register = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState({
        name: "",
        lastName: "",
        userName: "",
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        setData((prevValue) => {
            return { ...prevValue, [event.target.name]: event.target.value }
        })


    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(createUser(data))
    }
    console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input name="name" onChange={handleChange}></input>

                <br />
                <label>Last Name:</label>
                <input name="lastName" onChange={handleChange}></input>

                <br />
                <label>UserName:</label>
                <input name="userName" onChange={handleChange}></input>

                <br />
                <label>Email:</label>
                <input name="email" onChange={handleChange}></input>

                <br />
                <label>Password:</label>
                <input name="password" onChange={handleChange}></input>

                <br />
            <button   type="submit"  >CREAR</button>
            </form>
        </div>
    )

}

export default Register