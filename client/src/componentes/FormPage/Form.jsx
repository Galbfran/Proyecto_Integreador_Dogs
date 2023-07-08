

//componentes
import Formulario from "./componentsForm/Formulario";
import NavBar from "../NavBar/NavBar";



//styles


const Form = () => {
    const arrayCheck = [
        "Active",
        "Adaptable",
        "Adventurous",
        "Affectionate",
        "Aggressive",
        "Agile",
        "Alert",
        'holamundo'
    ]
    
    return(
        <section>
                <NavBar/>
                <h2>Formulario para crear una raza de Perro</h2>
                <Formulario arrayCheck={arrayCheck}/>
        </section>
    )
}

export default Form;

