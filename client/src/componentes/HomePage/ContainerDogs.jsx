//hooks
import { useEffect , useState } from "react";
//components
import CardDog from "../Dogs/CardDog";
import Buttons from "./Botones";
import SearchBar from "./SearchBar";
import CardCarga from "../Carga/CardCarga";
//funciones para filtro
import {filtrado} from "./filtrado";
// modelo de carga
import dogsVacio from "../../redux/dogsVacio";
// estilos
import styles from './Home.module.css'

const  ContainerDogs = ({dogs , arrayCheck}) => {
    const [checkbox , setCheckbox] = useState([arrayCheck]); //estado para crear ckeckbox
    const [temperaments , setTemperaments] = useState([]); //estadopara guardar los temperamentos selecionados
    let [listaDogs, setListaDogs] = useState(dogs); // estado que guarda los todos los dogs

    useEffect(() => { // paso a estado la lista re temperamentos pasados por props
        setCheckbox([...arrayCheck])
    },[arrayCheck])

    const handlerCkeckChange = (event) =>{ // funcion que guarda o saca temperamentos del estado
        const {  value , checked} = event.target;
        if (checked) {
            setTemperaments([...temperaments, value]);
        } else {
            setTemperaments(temperaments.filter((elim) => elim !== value));
        }
    }

    //paginado
    const ITEM_PAGE = 8 //valor paginado requerido
    let [dogsRender , setDogsRender] = useState([...listaDogs]); // estado a pasar con los dogs a renderizar
    
    useEffect(() => {
        setListaDogs(dogs); // Establecer la lista completa de perros al iniciar la página
    }, [dogs]);
    
    useEffect(() => {
        setDogsRender(listaDogs.slice(0, ITEM_PAGE));
        setCurrentPage(1);
    }, [ listaDogs]);
    
    const [ currentPage , setCurrentPage] = useState(0);

    const nextHandler = () => { // funcion para boton siguente 
        const totalElement = listaDogs.length; // busco total
        const nextPage = currentPage +1;        //se calcula numero proxima pagina
        const firstIndex = nextPage * ITEM_PAGE; // se calcula indice proxima pagina
        if (firstIndex >= totalElement) return;     // verifico que el proximo elemento no supere el total de elementos 
        setDogsRender([...listaDogs].splice(firstIndex , ITEM_PAGE));   //actulizo estado
        setCurrentPage(nextPage); //paso pagina 
    }

    const prevHandler = () => {
        const prevPage = currentPage - 1;// calculo numero de pagina anterior
        if (prevPage < 0) return; // verifico que no sea menor a 0
        const firstIndex = prevPage * ITEM_PAGE; // calculo indice del primer elemento de la pagina anterir
        setDogsRender([...listaDogs].splice(firstIndex , ITEM_PAGE));// cargo al estado la lista
        setCurrentPage(prevPage);//cambio el indice
    }

    const filterHandler = (tipo) => {
        let filteredDogs;
        if (tipo === 'ALL_DOGS') {
            filteredDogs = dogs; 
          // Utilizar el estado dogs directament
            setListaDogs(filteredDogs);
            setCurrentPage(1);
            setDogsRender(filteredDogs.slice(0, ITEM_PAGE));
        } else {
            
            filteredDogs = filtrado(listaDogs, tipo, temperaments); 
            // Aplicar filtro al estado listaDogs
            setListaDogs(filteredDogs);
            setCurrentPage(1);
            setDogsRender(filteredDogs.slice(0, ITEM_PAGE));
        }
    };

    return(
        <div >
            <div>
                <Buttons className={styles.buttons} prevHandler={prevHandler} nextHandler={nextHandler} numPage={currentPage} totalPage={dogs.length}/>
            </div>
            <div className={styles.container}>
            {   dogsRender.map(dog => {
                        return <CardDog 
                            key={dog?.idDogs}
                            id={dog?.idDogs}
                            image={dog?.imagen}
                            name={dog?.nombre}
                            temperamento={dog?.temperamento}
                            peso={dog?.peso}
                            baseDatos={dog?.baseDatos}
                        />})
                }
            {
                !dogsRender  && (
                    dogsVacio.map((dog , index)=> {
                        return <CardCarga
                            key={index}
                            name={dog.nombre}
                            temperamento={dog.temperamento}
                            peso={dog.peso}
                        />
                    })
                )
            }
            </div>
            <div className={styles.container}>
                <SearchBar checkbox={checkbox}  handlerCkeckChange={handlerCkeckChange} filterHandler={filterHandler}/>
            </div>
        </div>
    )
}

export default ContainerDogs