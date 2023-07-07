
import styles from './Botones.module.css'

const Buttons = ({prevHandler , nextHandler , numPage , totalPage}) => {
    const total = Math.ceil(totalPage / 8)

    return(
        <div className={styles.container}>
            <button onClick={() => prevHandler()}>Anterior</button>
            <p> Pagina Numero {numPage +1} - {total}</p> {/* corregir despues */}
            <button onClick={() => nextHandler()}>Siguente</button>
        </div>
    )
}

export default Buttons;