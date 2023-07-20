// hooks
import { useDispatch , useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams , useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
//redux-action
import { detailDogs , cleanDetail} from "../../redux/actions";
import { deleteDog } from "./DeleteDog";
//css
import styles from './Detail.module.css'

const Detail = () => {
    const navigate = useNavigate();             //me permite navegar por la pagina
    const dispatch = useDispatch();             // me permite interactuar con el estado global
    const { id } = useParams();                 //extraigo el id pasado por params
    const dogDetail = useSelector((state) => state.dogsDetail )     
    const { idDogs ,imagen , nombre, altura ,peso , vidaEstimada ,temperamento , baseDatos} = dogDetail 

    const modificar ={render :baseDatos}        // objeto que indica si renderizar botones de modificar o eliminar solo en dogs de base de datos

    useEffect(() => {                           //hooks que me permite manipular el montaje y desmontaje del componente
        dispatch(detailDogs(id));               //uso dispatch para traer dog por id
        return () => dispatch(cleanDetail())    //funcion para el momento del desmonte del componente limpio el estado global
    }, [id , dispatch])                         // array dependencias 

    const handlerDelete = async(id) => {        //funcion para eliminar dog de la BD al finalizar vuelve al home
        await deleteDog(id);                    // funcion auxiliar logica de eliminar dog
        navigate('/home');
    }

    return(
        <section >
            <div className={styles.container}>
                    { nombre && <img src={imagen} alt={nombre} className={styles.imagen}/>}
                    { !nombre && <img src={'https://media.tenor.com/YXS2BDyDWtwAAAAM/video-games-cargando.gif'} alt={'carga'} className={styles.imagen}/>}
                <div className={styles.data}>
                    { modificar.render && <div>
                        <button><Link to={`/detailmodificar/${id}`}>Formulario Modificar</Link></button>
                        <button onClick={()=> handlerDelete(id)}>Eliminar</button>
                    </div>
                    }
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