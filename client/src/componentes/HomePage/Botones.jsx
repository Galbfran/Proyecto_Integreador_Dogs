
import styles from './Botones.module.css'

const Buttons = ({prevHandler , nextHandler , numPage , totalPage}) => {
    const total = Math.floor(totalPage / 8)

    return(
        <div className={styles.container}>
            <button onClick={() => prevHandler()}>Anterior</button>
            <p> Pagina Numero {numPage} - {total}</p> 
            <button onClick={() => nextHandler()}>Siguente</button>
        </div>
    )
}

export default Buttons;