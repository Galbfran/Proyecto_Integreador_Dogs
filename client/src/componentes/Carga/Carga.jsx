import styles from './Carga.module.css'

const Carga = () => {
    let bar = ["bar1","bar2","bar3","bar4","bar5","bar6","bar7","bar8","bar9","bar10","bar11","bar12",]

    return(
        <div className={styles.loader}>
            {
                bar.map((div , index )=> <div key={index} className={styles[div]}></div>)
            }
        </div>
    )
}

export default Carga;