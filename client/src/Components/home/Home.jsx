import { Link } from "react-router-dom"

const Home = () => {
    
    return (
        <div>
            <h1>HOME</h1>
            <Link to={"/login"}>
            <button>LOGIN</button>
            </Link>
        </div>
    )
}

export default Home