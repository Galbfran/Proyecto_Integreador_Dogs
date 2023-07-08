import { useEffect , useState } from "react";
import CkeckBox from "./CheckBox";
import validate from "../validate";
import styles from './Formulario.module.css'

const Formulario = ({arrayCheck}) => {
    const [inputs , setInputs] = useState({
        Nombre:'',
        PesoMin:'',
        PesoMax:'',
        AlturaMin:'',
        AlturaMax:'',
        AniosMin:'',
        AniosMax:'',
    });

    const [errors , setErrors] = useState({
        Nombre:'',
        PesoMin:'',
        PesoMax:'',
        AlturaMin:'',
        AlturaMax:'',
        AniosMin:'',
        AniosMax:'',
    });

    const [temperaments , setTemperaments] = useState([]);

    const [checkbox , setCheckbox] = useState([arrayCheck]);

    useEffect(() => {
        setCheckbox([...arrayCheck])
    },[])


    const arrayInputs = Object.keys(inputs)
    
/*    const handlerSubmit = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        })
    } */

    const handlerChange = (event) => {
        const { name, value} = event.target;
        setInputs({
            ...inputs,
            [name ] : value
        });
        validate({...inputs, [name]: value})
        setErrors(validate({
            ...inputs,
            [name] : value
        }));
    }
    const handlerCkeckChange = (event) =>{
        const {  value , checked} = event.target;
        if(checked){
            setTemperaments([...temperaments, value])
        }else {
            setTemperaments(temperaments.filter(elim => elim !== value ))
        }
    }

    return(
        <form className={styles.container} >
                    {
                        arrayInputs.map(dato => {
                            return(
                                <div className={styles.datosTexto}>
                                    <label htmlFor={dato}>{`Dato a Ingresar: ${dato}`}</label>
                                    <input type="text" id={dato} name={dato} placeholder={`Ingrese ${dato}: ` } value={inputs[dato]} onChange={handlerChange} className={errors[dato] && 'warning'}/> 
                                    {errors[dato] && <span className={styles.danger}>{errors[dato]}</span>}
                                    {!errors[dato] && <span>Con Validacion</span>}
                                </div>
                            )
                        })
                    }
                    <div className={styles.containerCkeck}>
                        <label htmlFor="temperamento">Temperamento:</label>
                        {
                            checkbox.map(check => {
                                return(
                                    <div className={styles.check}>
                                        <CkeckBox check={check}  handlerCkeckChange={handlerCkeckChange}/>
                                    </div>
                                    )
                            })
                        }
                    </div>
                    
                    <div className={styles.button}>
                        <button >Crear Perro</button>
                        <button type="reset">Reset</button>
                    </div>
                </form>
    )

} 


export default Formulario;

const arrayCheck = [
    "Active",
    "Adaptable",
    "Adventurous",
    "Affectionate",
    "Aggressive",
    "Agile",
    "Alert"
]