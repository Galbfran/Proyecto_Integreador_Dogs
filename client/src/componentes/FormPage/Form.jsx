//hooks
import { useDispatch , useSelector} from "react-redux";
import { useEffect } from "react";
//componentes
import Formulario from "./componentsForm/Formulario";
import NavBar from "../NavBar/NavBar";
//redux-action
import { getTemperament } from "../../redux/actions";


const Form = () => {
    const dispatch = useDispatch();
    const arrayCheck = useSelector(state => state.temperament)

    useEffect(() => {
        dispatch(getTemperament())
    }, [dispatch])

    return(
        <section>
                <NavBar/>
                <h2>Formulario para crear una raza de Perro</h2>
                <Formulario arrayCheck={arrayCheck}/>
        </section>
    )
}

export default Form;

