
import { useEffect , useState } from "react";

import CardDog from "../Dogs/CardDog";
import Buttons from "./Botones";
import SearchBar from "./SearchBar";
import {filtrado} from "./filtrado";

import styles from './Home.module.css'



const  ContainerDogs = ({dogs , arrayCheck}) => {
    const [checkbox , setCheckbox] = useState([arrayCheck]);
    const [temperaments , setTemperaments] = useState([]);
    let [listaDogs, setListaDogs] = useState(dogs);

    useEffect(() => {
        setCheckbox([...arrayCheck])
    },[arrayCheck])
    
    const handlerCkeckChange = (event) =>{
        const {  value , checked} = event.target;
        if(checked){
            setTemperaments([...temperaments, value])
        }else {
            setTemperaments(temperaments.filter(elim => elim !== value ))
        }
    }
    

    //paginado
    const ITEM_PAGE = 8
    let [dogsRender , setDogsRender] = useState([...listaDogs]);

    useEffect(() => {
        setListaDogs(dogs); // Establecer la lista completa de perros al iniciar la página
    }, [dogs]);
    
    useEffect(() => {
        setDogsRender(listaDogs.slice(0, ITEM_PAGE));
        setCurrentPage(1);
    }, [ listaDogs]);
    


    const [ currentPage , setCurrentPage] = useState(0);

    const nextHandler = () => {
        const totalElement = listaDogs.length;
        const nextPage = currentPage +1;
        const firstIndex = nextPage * ITEM_PAGE;
        if (firstIndex >= totalElement) return;
        setDogsRender([...listaDogs].splice(firstIndex , ITEM_PAGE));
        setCurrentPage(nextPage);
    }

    const prevHandler = () => {
        const prevPage = currentPage - 1;
        if (prevPage < 0) return;
        const firstIndex = prevPage * ITEM_PAGE;
        setDogsRender([...listaDogs].splice(firstIndex , ITEM_PAGE));
        setCurrentPage(prevPage);
    }

    const filterHandler = (tipo) => {
        let filteredDogs;
        if (tipo === 'ALL_DOGS') {
            filteredDogs = dogs; // Utilizar el estado dogs directamente
            } else {
            filteredDogs = filtrado(listaDogs, tipo , temperaments); // Aplicar filtro al estado listaDogs
            }
        setListaDogs(filteredDogs);
        setDogsRender(filteredDogs.slice(0, ITEM_PAGE));
        setCurrentPage(1);
    }


    return(
        <div >
            <div>
                <Buttons className={styles.buttons} prevHandler={prevHandler} nextHandler={nextHandler} numPage={currentPage} totalPage={dogs.length}/>
            </div>
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
            <div className={styles.container}>
                <SearchBar checkbox={checkbox}  handlerCkeckChange={handlerCkeckChange} filterHandler={filterHandler}/>
            </div>
        </div>
    )
}

export default ContainerDogs