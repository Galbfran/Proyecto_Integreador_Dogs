//Hooks
import { useDispatch , useSelector } from "react-redux";
import { useEffect } from "react";
//redux-action
import { getAllDogs , cleanDogs , getTemperament} from "../../redux/actions";
//componentes
import ContainerDogs from "./ContainerDogs";
// componente principal de home.
//en este componente se realiza el dispatch al estado global 
//solicito array con todos los dogs y los temperamentos
//en el useEffect retorno un dispatch para limpiar el estado golbal "soluciona bug cuando volves a entrar a home aparece el stado anterior sin acualizar por unos segundos"
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
            <article >
                <ContainerDogs dogs={dogs} arrayCheck={arrayCheck} />
            </article>
            
        </section>
    )
}

export default Home;