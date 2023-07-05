import { Link } from "react-router-dom";

const Inicio = () => {
    return(
        <div>
            <h1>Estoy en inicio</h1>
            <button>
                <Link to='/home'>Boton a Home</Link>
            </button>
        </div>
    )
}

export default Inicio;