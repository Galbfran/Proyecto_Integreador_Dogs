import styles from './Botones.module.css'
import CkeckBox from '../FormPage/componentsForm/CheckBox';
import { 
    API,
    BASE_DATOS,
    ASCENDENTE_ID,
    DESCENDENTE_ID,
    ALFABETICO_AZ,
    ALFABETICO_ZA,
    PESO_MIN_MAX,
    PESO_MAX_MIN,
    TEMPERAMENTO,
    ALL_DOGS
} from './filtrado';

const SearchBar = ({ handlerCkeckChange , checkbox , filterHandler}) => {
    let filtros = [
        API,
        BASE_DATOS,
        ASCENDENTE_ID,
        DESCENDENTE_ID,
        ALFABETICO_AZ,
        ALFABETICO_ZA,
        PESO_MIN_MAX,
        PESO_MAX_MIN,
        TEMPERAMENTO,
        ALL_DOGS
    ]

    return(
        <div className={styles.searchbar}>
            <div className={styles.container}>
            {
                filtros.map((filtro , index)=> <button key={index} onClick={() => filterHandler(filtro)} >{filtro}</button>)
            }
            </div>
            <div  className={styles.containerCkeck} >
            {
                checkbox.map((check , index)=> {
                    return(
                        <div className={styles.check} key={index}>
                            <CkeckBox check={check}   handlerCkeckChange={handlerCkeckChange}/>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SearchBar;