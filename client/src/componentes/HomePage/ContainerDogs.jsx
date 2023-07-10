
import { useEffect , useState } from "react";

import CardDog from "../Dogs/CardDog";
import Buttons from "./Botones";
import SearchBar from "./SearchBar";


import styles from './Home.module.css'

const  ContainerDogs = ({dogs , arrayCheck}) => {
    const [checkbox , setCheckbox] = useState([arrayCheck]);
    const [temperaments , setTemperaments] = useState([]);
        useEffect(() => {
        setCheckbox([...arrayCheck])
    },[arrayCheck])
    
    const handlerCkeckChange = (event) =>{
        const {  value , checked} = event.target;
        if(checked){
            setTemperaments([...temperaments, value])
            console.log(temperaments , 'truel')
        }else {
            setTemperaments(temperaments.filter(elim => elim !== value ))
            console.log(temperaments , 'faslse')
        }
    }
    
    //paginado
    const ITEM_PAGE = 8
    let [dogsRender , setDogsRender] = useState([...dogs].splice(0 , ITEM_PAGE));
    
    useEffect(() => {
        setDogsRender(dogs.slice(0, ITEM_PAGE));
        setCurrentPage(1);
    }, [ dogs]);
    

    const [ currentPage , setCurrentPage] = useState(0);

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
                <SearchBar checkbox={checkbox}  handlerCkeckChange={handlerCkeckChange}/>
            </div>
        </div>
    )
}

export default ContainerDogs