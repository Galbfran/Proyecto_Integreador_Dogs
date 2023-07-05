import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div>
            <button>
                <Link to='/form'>Boton a Form</Link>
            </button>
            <button>
                <Link to='/home'>Home</Link>
            </button>
            <button>
                <Link to='/'>Inicio</Link>
            </button>
        </div>
    )
}

export default NavBar