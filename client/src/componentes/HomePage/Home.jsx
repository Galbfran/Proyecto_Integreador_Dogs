//Hooks
import { useDispatch , useSelector } from "react-redux";
import { useEffect , useState } from "react";
//redux-action
import { getAllDogs , cleanDogs , getTemperament , getDogsByName} from "../../redux/actions";
//componentes
import ContainerDogs from "./ContainerDogs";
import InputName from "./InputName";
import styles from './Botones.module.css'
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
    }, [ dispatch])
    
    let  dogs  = useSelector(state => state.allDogs)
    let arrayCheck = useSelector(state => state.temperament)

    let [name , setName] = useState('')

    const handlerChange = (event) => {
        const { value } = event.target;
        setName(value);
    };

    const handlerName = () => {
        dispatch(getDogsByName(name))
        }

    return(
        <section>
            <div className={styles.container}>
                <InputName handlerName={handlerName} name={name} handlerChange={handlerChange} />
            </div>
            <article >
                <ContainerDogs dogs={dogs} arrayCheck={arrayCheck} />
            </article>
        </section>
    )
}

export default Home;