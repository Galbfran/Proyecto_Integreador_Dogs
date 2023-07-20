import { Link } from "react-router-dom";
import styles from './styleCard.module.css'
// componente carta de home envuelto en un link para que cuando se de click en cualquier parte de la card lleve al usuario al detail correspondiente

const CardDog = ({ id, image, name, peso, temperamento}) => {

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
    
