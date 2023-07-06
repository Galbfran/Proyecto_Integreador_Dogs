import { Link } from "react-router-dom";
import styles from './styleCard.module.css'

const CardDog = ({id , image , name  , peso , temperamento}) => {
    return(
        <div className={styles.card}>
            <img src={image} alt={name} className={styles.imagen}/>
            <h2><Link to={`/detail/${id}`} >Raza: {name}</Link></h2>
            <p>Peso: {peso}</p>
            <p>Temperamento: {temperamento}</p>
        </div>
    )
}

export default CardDog;
