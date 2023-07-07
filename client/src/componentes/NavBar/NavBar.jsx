import { Link } from "react-router-dom";
import styles from './NavBar.module.css'

const NavBar = () => {
    return(
        <div className={styles.container}>
            <button>
                <Link to='/'>Inicio</Link>
            </button>
            <button>
                <Link to='/home'>Home</Link>
            </button>
            <button>
                <Link to='/form'>Boton a Form</Link>
            </button>
            <button>
                <Link to='/about'>About</Link>
            </button>
        </div>
    )
}

export default NavBar