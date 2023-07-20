//hooks
import { useDispatch , useSelector} from "react-redux";
import { useEffect } from "react";
//componentes
import Formulario from "./componentsForm/Formulario";
//redux-action
import { getTemperament } from "../../redux/actions";
//componente padre formulario
const Form = () => {
    const dispatch = useDispatch();     //traigo del estado global los temepramentos
    const arrayCheck = useSelector(state => state.temperament)

    useEffect(() => {
        dispatch(getTemperament())
    }, [dispatch])

    return(
        <section>
                <h2>Formulario para crear una raza de Perro</h2>
                <Formulario arrayCheck={arrayCheck}/>
        </section>
    )
}

export default Form;

