//hooks
import { useEffect , useState } from "react";
import { useNavigate } from "react-router-dom";
//components
import CkeckBox from "./CheckBox";
// auxiliares
import posteoDog from "../posteoDog";
import validate from "../validate";
import { validarPost } from "../validarPost";
//css
import styles from './Formulario.module.css'

const Formulario = ({arrayCheck}) => {
    let navigate = useNavigate();
    let [newTemp , setNewTemp] = useState("");      //estado para guardar temperamentos no existentes
    const [inputs , setInputs] = useState({         //estado para guardar valores inputs
        nombre:'',
        pesoMin:'',
        pesoMax:'',
        alturaMin:'',
        alturaMax:'',
        añosMin:'',
        añosMax:'',
    });
    const [errors , setErrors] = useState({         //guarda mensajes de error
        nombre:'',
        pesoMin:'',
        pesoMax:'',
        alturaMin:'',
        alturaMax:'',
        añosMin:'',
        añosMax:'',
    });
    const [temperaments , setTemperaments] = useState([ ]);     //array con temperamentos selecionados
    const [checkbox , setCheckbox] = useState([arrayCheck]);    //array con temperamentos a renderizar

    useEffect(() => {
        setCheckbox([...arrayCheck])
    },[arrayCheck])

    const arrayInputs = Object.keys(inputs).filter(key => key !== 'nombre')
    
    const handlerChange = (event) => {
        const { name, value} = event.target;
        setInputs({
            ...inputs,
            [name ] : value
        });
        validate({...inputs, [name]: value})
            setErrors(validate({
                ...inputs,
                [name]: value
            }))
    }
    const handlerCkeckChange = (event) =>{              //handler para cargar temperamentos desde los checkbox  
        const {  value , checked} = event.target;
        if(checked){
            setTemperaments([...temperaments, value])
        }else {
            setTemperaments(temperaments.filter(elim => elim !== value ))
        }
    }

    const handlerTempInput = (event) => {               //handler para agregar temperamento a el array si no esta en la base de datos
        if(event.length === 0) return
        setTemperaments([...temperaments , event])
        setNewTemp(newTemp = "")
        
    }

    const handlerSubmit = async(event) => {             // handler para post nuevo dog
        event.preventDefault()
        if (validarPost(inputs)) return alert('Debes completar todos los datos')
        try {
            const respons = await posteoDog(inputs , temperaments)
            alert(respons)
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
        navigate('/home')
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
                        <label htmlFor={dato}>{`Dato a Ingresar ${dato}:`}</label>
                        <input type="number" id={dato} name={dato} placeholder={`Ingrese ${dato}: ` } value={inputs[dato]} onChange={handlerChange} className={errors[dato] && 'warning'}/> 
                        {errors[dato] && <span className={styles.danger}>{errors[dato]}</span>}
                    </div>
                    )
                })
            }
            <div className={styles.containerCkeck}>
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
            <div>
                <label htmlFor="temperamento">Temperamento:</label>
                <input type="text" placeholder="temperamento" name="temperamento" value={newTemp} onChange={(e) => setNewTemp(e.target.value)}/>
                <button type="button" onClick={() => handlerTempInput(newTemp)}>Nuevo Temperamento</button>
            </div>
            <div className={styles.button}>
            { Object.keys(errors).length === 0 && <button type="submit">Crear Perro</button>}
                <button type="reset">Reset</button>
            </div>
        </form>
    )
} 

export default Formulario;
