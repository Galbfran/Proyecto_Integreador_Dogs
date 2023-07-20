
import { Link } from "react-router-dom";
import styles from './Inicio.module.css'

const Inicio = () => {
    const imagen = 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/12/21173751/perro-spa.jpg'
    const nombre = "Spa Perros"
    const localidad = "San Miguel"
    const telefono = "54 - 11 - 4567 - 1234 "
    const mail = "SpaDogs@gmail.com"

    return(
        <div>
            <h1>Proyecto Integrador Dogs</h1>
            <div>
                <div className={styles.container}>
                    <img src={imagen} alt={nombre} className={styles.imagen}/>
                <div className={styles.data}>
                    <h2>Nombre: {nombre}</h2>
                    <p>Localidad: {localidad}</p>
                    <p>Telefono: {telefono}</p>
                    <p>Mail: {mail}</p>
                    <button>
                        <Link to={'/home'}>Entrar al Home</Link>
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Inicio;

