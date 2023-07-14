// hooks
import { useDispatch , useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
//redux-action
import { detailDogs , cleanDetail} from "../../redux/actions";

//compenents
import NavBar from "../NavBar/NavBar";

//css
import styles from './Detail.module.css'

const Detail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    
    const dogDetail = useSelector((state) => state.dogsDetail )
    const { idDogs ,imagen , nombre, altura ,peso , vidaEstimada ,temperamento } = dogDetail
    
    useEffect(() => {
        dispatch(detailDogs(id));
        return () => dispatch(cleanDetail())
    }, [id , dispatch])

    return(
        <section >
                <NavBar/>
            <div className={styles.container}>
                    { nombre && <img src={imagen} alt={nombre} className={styles.imagen}/>}
                    { !nombre && <img src={'https://media.tenor.com/YXS2BDyDWtwAAAAM/video-games-cargando.gif'} alt={'carga'} className={styles.imagen}/>}
                
                <div className={styles.data}>
                    <h2>Raza: { (!nombre && "Cargando...") || nombre}</h2>
                    <p>ID_Dog: { (!idDogs && "Cargando...") || idDogs}</p>
                    <p>Altura: { (!idDogs && "Cargando..." )|| altura}</p>
                    <p>Peso: {(!nombre && "Cargando...") || peso}</p>
                    <p>Vida Estimada: {(!nombre && "Cargando...") || vidaEstimada}</p>
                    <p>Temperamento: {(!nombre && "Cargando...") || temperamento}</p>
                    <button>
                        <Link to={'/home'}>Volver al Home</Link>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Detail;