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
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const dogDetail = useSelector((state) => state.dogsDetail )
    const { idDogs ,imagen , nombre, altura ,peso , vidaEstimada ,temperamento , baseDatos} = dogDetail
    const modificar ={render :baseDatos}

    useEffect(() => {
        dispatch(detailDogs(id));
        return () => dispatch(cleanDetail())
    }, [id , dispatch])

    const handlerDelete = async(id) => {
        await deleteDog(id);
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