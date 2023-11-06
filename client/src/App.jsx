import { Navigate, Route, Routes } from "react-router-dom"
import Login from "./Components/login/Login"
import Home from "./Components/home/Home"
import Chats from "./Components/chats/Chats"
import { useSelector } from "react-redux"
import Register from "./Components/Register/Register"

function App() {
  const user = useSelector((state)=> state.usuario)
  console.log(user);
  return (
    <>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/chats" element={(user.isLoggedIn === true)? <Chats/> : <Navigate to="/login"/> }/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

      </Routes>
    </>
  )
}

export default App
