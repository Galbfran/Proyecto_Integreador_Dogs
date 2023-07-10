import styles from './Botones.module.css'
import CkeckBox from '../FormPage/componentsForm/CheckBox';


const SearchBar = ({ handlerCkeckChange , checkbox}) => {
    

    return(
        <div className={styles.searchbar}>
            <div className={styles.container}>
                <button>Api</button>
                <button>BD</button>
                <button>ascendente id</button>
                <button>descendente id</button>
                <button>alfavetico</button>
                <button>peso</button>
            </div>
            <div  className={styles.containerCkeck} >
            {
                checkbox.map(check => {
                    return(
                        <div className={styles.check}>
                            <CkeckBox check={check}  handlerCkeckChange={handlerCkeckChange}/>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SearchBar;