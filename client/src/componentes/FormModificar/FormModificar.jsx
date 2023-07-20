//hooks
import { useDispatch , useSelector} from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
//componentes
import Formulario from "./componentsForm/Formulario";
//redux-action
import { detailDogs  , cleanDetail} from "../../redux/actions";
import { getTemperament } from "../../redux/actions";
import styles from './Form.module.css'

// componente padre para modificar dogs de la base de datos
// renderiza info actual de dog a cambiar  y el formulario 
const FormModificar = () => {
    const { id } = useParams();
    const dogDetail = useSelector((state) => state.dogsDetail )
    const { idDogs , nombre, altura ,peso , vidaEstimada ,temperamento } = dogDetail
    const dispatch = useDispatch();
    const arrayCheck = useSelector(state => state.temperament)

    useEffect(() => {
        dispatch(getTemperament());
        dispatch(detailDogs(id));
        return () => dispatch(cleanDetail())
    }, [ id,dispatch ])
    return(
        <section>
                <div >
                    <h2>Formulario para modificar una raza de Perro</h2>
                    <div className={styles.container}>
                        <h2>Raza: { (!nombre && "Cargando...") || nombre}</h2>
                        <p>ID_Dog: { (!idDogs && "Cargando...") || idDogs}</p>
                        <p>Altura: { (!idDogs && "Cargando..." )|| altura}</p>
                        <p>Peso: {(!nombre && "Cargando...") || peso}</p>
                        <p>Vida Estimada: {(!nombre && "Cargando...") || vidaEstimada}</p>
                        <p>Temperamento: {(!nombre && "Cargando...") || temperamento}</p>
                    </div>
                </div>
                <Formulario id={id} arrayCheck={arrayCheck}/>
        </section>
    )
}
export default FormModificar;

