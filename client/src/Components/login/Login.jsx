import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginUser, resetError } from "../../Redux/action"
import { Link, useNavigate } from "react-router-dom"


const Login = () =>  {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userError = useSelector((state)=> state.usuario.error)
    const userLogged = useSelector((state)=> state.usuario.isLoggedIn)
    console.log("estado", userError);
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    
    const handleChange = (event) => {
        if(event.target.name === "email") {
            setData((prevValue) => {
                return {...prevValue, email: event.target.value}
            })
        } else {
            setData((prevValue) => {
                return {...prevValue, password: event.target.value}
            })
        }
        
    }
    
    const handleSubmit = () => {
        dispatch(loginUser(data))
    }
    
    
    useEffect(() => {

        if (userError) {

          window.alert(userError);
        }

        if (userLogged === true) {
          navigate("/chats");
        }
      }, [userError, userLogged]);

console.log("estado local", data);

    return (
        <div>
            <h1>LOGIN</h1>
            <input name="email" placeholder="Ingrese su email..." onChange={handleChange}/>
            <input name="password" placeholder="Ingrese su contraseña..." onChange={handleChange} />
            <button onClick={handleSubmit}>INGRESAR</button>
            <p>Si aun no estas registrados puedes registrarte</p>
            <Link to={"/register"}>
            <button>REGISTRARSE</button>
            </Link>
        </div>
    )

} 


export default Login