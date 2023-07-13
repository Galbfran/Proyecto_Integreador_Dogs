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
    const { ID_Dogs ,Imagen , Nombre, Altura ,Peso ,Anios_Vida ,Temperamento } = dogDetail
    
    useEffect(() => {
        dispatch(detailDogs(id));
        return () => dispatch(cleanDetail())
    }, [id , dispatch])

    return(
        <section >
                <NavBar/>
            <div className={styles.container}>
                    { Nombre && <img src={Imagen} alt={Nombre} className={styles.imagen}/>}
                    { !Nombre && <img src={'https://media.tenor.com/YXS2BDyDWtwAAAAM/video-games-cargando.gif'} alt={'carga'} className={styles.imagen}/>}
                
                <div className={styles.data}>
                    <h2>Raza: { (!Nombre && "Cargando...") || Nombre}</h2>
                    <p>ID_Dog: { (!ID_Dogs && "Cargando...") || ID_Dogs}</p>
                    <p>Altura: { (!ID_Dogs && "Cargando..." )|| Altura}</p>
                    <p>Peso: {(!Nombre && "Cargando...") || Peso}</p>
                    <p>Vida: {(!Nombre && "Cargando...") || Anios_Vida}</p>
                    <p>Temperamento: {(!Nombre && "Cargando...") || Temperamento}</p>
                    <button>
                        <Link to={'/home'}>Volver al Home</Link>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Detail;