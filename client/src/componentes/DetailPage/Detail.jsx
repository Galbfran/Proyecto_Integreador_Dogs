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
                    <img src={Imagen} alt={Nombre} className={styles.imagen}/>
                
                <div className={styles.data}>
                    <h2>Raza: {Nombre}</h2>
                    <p>ID_Dog: {ID_Dogs}</p>
                    <p>Altura: {Altura}</p>
                    <p>Peso: {Peso}</p>
                    <p>Vida: {Anios_Vida}</p>
                    <p>Temperamento: {Temperamento}</p>
                    <button>
                        <Link to={'/home'}>Volver al Home</Link>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Detail;