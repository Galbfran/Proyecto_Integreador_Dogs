import Carga from "./Carga";
import styles from '../Dogs/styleCard.module.css'
//card de espera 

const CardCarga = ({name , peso , temperamento}) => {
    return(
        <div className={styles.card}>
            <Carga/>
            <h2 className={styles.link}>Cargando Raza: {name?.toUpperCase()}</h2>
            <p>Cargando Peso: {peso}</p>
            <p>Cargando Temperamento: {temperamento}</p>
        </div>
    )
}
export default CardCarga;