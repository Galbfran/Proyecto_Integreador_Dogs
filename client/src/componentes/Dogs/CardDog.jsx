import { Link } from "react-router-dom";
import styles from './styleCard.module.css'


const CardDog = ({ id, image, name, peso, temperamento, baseDatos }) => {


        return (
        <div>
            <Link to={`/detail/${id}`} className={styles.card} >
            <img src={image} alt={name} className={styles.imagen} />
            <h2 className={styles.link}>Raza: {name?.toUpperCase()}</h2>
            <p>Peso: {peso}</p>
            <p>Temperamento: {temperamento}</p>
            </Link>
        </div>
        );
    };
    
    export default CardDog;
    
