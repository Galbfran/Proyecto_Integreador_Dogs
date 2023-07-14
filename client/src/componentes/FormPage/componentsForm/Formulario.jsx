//hooks
import { useEffect , useState } from "react";
//components
import CkeckBox from "./CheckBox";
import validate from "../validate";
import posteoDog from "../posteoDog";
//css
import styles from './Formulario.module.css'


const Formulario = ({arrayCheck}) => {
    const [inputs , setInputs] = useState({
        nombre:'',
        pesoMin:'',
        pesoMax:'',
        alturaMin:'',
        alturaMax:'',
        añosMin:'',
        añosMax:'',
    });
    const [errors , setErrors] = useState({
        nombre:'',
        pesoMin:'',
        pesoMax:'',
        alturaMin:'',
        alturaMax:'',
        añosMin:'',
        añosMax:'',
    });
    const [temperaments , setTemperaments] = useState([ ]);

    const [checkbox , setCheckbox] = useState([arrayCheck]);

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
        setTimeout(() => {
            setErrors(validate({
                ...inputs,
                [name]: value
            }));
        }, 1000);
    }
    const handlerCkeckChange = (event) =>{
        const {  value , checked} = event.target;
        if(checked){
            setTemperaments([...temperaments, value])
        }else {
            setTemperaments(temperaments.filter(elim => elim !== value ))
        }
    }

    const handlerSubmit = async(event) => {
        event.preventDefault()
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
        })
        setTemperaments([ ])


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
