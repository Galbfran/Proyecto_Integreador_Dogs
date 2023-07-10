//Hooks
import { useDispatch , useSelector } from "react-redux";
import { useEffect } from "react";


//redux-action
import { getAllDogs , cleanDogs , getTemperament} from "../../redux/actions";

//componentes
import NavBar from "../NavBar/NavBar";
import SearchBar from "./SearchBar";
import ContainerDogs from "./ContainerDogs";
//css
import styles from './Home.module.css'


const Home = () => {
    //usar reducer
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllDogs());
        dispatch(getTemperament())
        return () => dispatch(cleanDogs())
    }, [ dispatch ])
    
    let  dogs  = useSelector(state => state.allDogs)
    let arrayCheck = useSelector(state => state.temperament)


    return(
        <section>
            <div>
                <NavBar/>
            </div>
            <article >
                <ContainerDogs dogs={dogs} arrayCheck={arrayCheck} />
            </article>
            <div>
              {/*   <SearchBar className={styles.buttons} arrayCheck={arrayCheck}/> */}
            </div>
        </section>
    )
}

export default Home;