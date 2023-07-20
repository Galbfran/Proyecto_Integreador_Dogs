//hooks
import { useEffect , useState } from "react";
//components
import CkeckBox from "./CheckBox";
import validate from "../validate";
import {updateDog} from "../updateDog";
import { useNavigate} from "react-router-dom";
//css
import styles from './Formulario.module.css'

const Formulario = ({arrayCheck , id}) => {
    const navigate = useNavigate();             
    const [inputs , setInputs] = useState({     //estado para guardar valores de los inputs
        nombre:'',
        pesoMin:'',
        pesoMax:'',
        alturaMin:'',
        alturaMax:'',
        añosMin:'',
        añosMax:'',
    });
    const [errors , setErrors] = useState({     // estado para guardar msj de errar
        nombre:'',
        pesoMin:'',
        pesoMax:'',
        alturaMin:'',
        alturaMax:'',
        añosMin:'',
        añosMax:'',
    });
    const [temperaments , setTemperaments] = useState([ ]);     //guarda temperamentos en array
    const [checkbox , setCheckbox] = useState([arrayCheck]);    // pasa los temepramentos de estado global para crear checkbox

    useEffect(() => {
        setCheckbox([...arrayCheck])
    },[arrayCheck])

    const arrayInputs = Object.keys(inputs).filter(key => key !== 'nombre') //array para crear los inputs numericos 
    
    const handlerChange = (event) => {          //guardo valores en los estados correspondientes 
        const { name, value} = event.target;
        setInputs({
            ...inputs,
            [name ] : value
        });
        validate({...inputs, [name]: value})
            setErrors(validate({
                ...inputs,
                [name]: value
            }));
        
    }
    const handlerCkeckChange = (event) =>{              //handler par los checkbox
        const {  value , checked} = event.target;
        if(checked){
            setTemperaments([...temperaments, value])
        }else {
            setTemperaments(temperaments.filter(elim => elim !== value ))
        }
    }

    const handlerSubmit = async(event) => {             // handler para submit con la base de datos retorna al detail
        event.preventDefault()
        try {
            const respons = await updateDog(id, inputs , temperaments)
            alert(respons)
            navigate(`/detail/${id}`);
        } catch (error) {
            alert(error.message)
        }
        setInputs({
            nombre:'',
            pesoMin:'',
            pesoMax:'',
            alturaMin:'',
            alturaMax:'',
            añosMin:'',
            añosMax:'',
        });
        setErrors({
            nombre:'',
            pesoMin:'',
            pesoMax:'',
            alturaMin:'',
            alturaMax:'',
            añosMin:'',
            añosMax:'',
        });
        setTemperaments([ ]);
        setCheckbox([...arrayCheck]);
    }
    return(
        <form className={styles.container}  onSubmit={handlerSubmit}>
                    <div className={styles.datosTexto}>
                        <label htmlFor={'nombre'}>{`Dato a Ingresar: nombre`}</label>
                        <input type="text" id={'nombre'} name={'nombre'} placeholder={`Ingrese ${'nombre'}: ` } value={inputs.nombre} onChange={handlerChange} className={errors.nombre && 'warning'}/> 
                        {errors.nombre && <span className={styles.danger}>{errors.nombre}</span>}
                    </div>
            {
            arrayInputs.map(dato => {
                return(
                    <div className={styles.datosTexto}>
                        <label htmlFor={dato}>{`Dato a Ingresar: ${dato}`}</label>
                        <input type="number" id={dato} name={dato} placeholder={`Ingrese ${dato}: ` } value={inputs[dato]} onChange={handlerChange} className={errors[dato] && 'warning'}/> 
                        {errors[dato] && <span className={styles.danger}>{errors[dato]}</span>}
                    </div>
                    )
                })
            }
            <div className={styles.containerCkeck}>
                <label htmlFor="temperamento">temperamento:</label>
                {
                checkbox.map((check , index) => {
                    return(
                        <div className={styles.check} key={index}>
                            <CkeckBox check={check}  handlerCkeckChange={handlerCkeckChange} />
                        </div>
                        )
                    })
                }
            </div>
            <div className={styles.button}>
            <button type="submit">Modificar Perro</button>
                <button type="reset">Reset</button>
            </div>
        </form>
    )
} 

export default Formulario;
