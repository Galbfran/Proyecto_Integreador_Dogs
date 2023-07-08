//Hooks
import { useDispatch , useSelector } from "react-redux";
import { useEffect , useState} from "react";


//redux-action
import { getAllDogs } from "../../redux/actions";

//componentes
import NavBar from "../NavBar/NavBar";
import CardDog from "../Dogs/CardDog";
import Buttons from "./Botones";
//css
import styles from './Home.module.css'

const Home = () => {
    const ITEM_PAGE = 8

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllDogs());
    }, [ dispatch])

    const [ dogs]  = useState(useSelector(state => state.allDogs))

    
    const [dogsRender , setDogsRender] = useState([...dogs].splice(0 , ITEM_PAGE));
    useEffect(() => {
        setDogsRender(dogs.slice(0, ITEM_PAGE));
        setCurrentPage(1);
    }, [dogs]);
    
    
    const [ currentPage , setCurrentPage] = useState(0);
    console.log(currentPage)
    const nextHandler = () => {
        const totalElement = dogs.length;
        const nextPage = currentPage +1;
        const firstIndex = nextPage * ITEM_PAGE;
        if (firstIndex >= totalElement) return;
        setDogsRender([...dogs].splice(firstIndex , ITEM_PAGE));
        setCurrentPage(nextPage);
    }

    const prevHandler = () => {
        const prevPage = currentPage - 1;
        if (prevPage < 0) return;
        const firstIndex = prevPage * ITEM_PAGE;
        setDogsRender([...dogs].splice(firstIndex , ITEM_PAGE));
        setCurrentPage(prevPage);
    }

    return(
        <section>
            <div>
                <NavBar/>
            </div>
            <article >
                <Buttons  className={styles.buttons} prevHandler={prevHandler} nextHandler={nextHandler} numPage={currentPage} totalPage={dogs.length}/>
                <div className={styles.container}>
                {   dogsRender.map(dog => {
                        return <CardDog 
                            key={dog?.ID_Dogs}
                            id={dog?.ID_Dogs}
                            image={dog?.Imagen}
                            name={dog?.Nombre}
                            temperamento={dog?.Temperamento}
                            peso={dog?.Peso}
                        />})
                }
                </div>
            </article>
        </section>
    )
}

export default Home;