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
    console.log(inputs.PesoMax)
    const [temperaments , setTemperaments] = useState([]);

    const [checkbox , setCheckbox] = useState([arrayCheck]);

    useEffect(() => {
        setCheckbox([...arrayCheck])
    },[arrayCheck])


    const arrayInputs = Object.keys(inputs).filter(key => key !== 'Nombre')
    

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

    const handlerSubmit = async(event) => {
        event.preventDefault()
        try {
            const respons = await posteoDog(inputs , temperaments)
            alert(respons)
            console.log(respons)
        } catch (error) {
            alert(error.message)
        }
    }
    return(
        <form className={styles.container}  onSubmit={handlerSubmit}>
                    <div className={styles.datosTexto}>
                        <label htmlFor={'Nombre'}>{`Dato a Ingresar: Nombre`}</label>
                        <input type="text" id={'Nombre'} name={'Nombre'} placeholder={`Ingrese ${'Nombre'}: ` } value={inputs.Nombre} onChange={handlerChange} className={errors.Nombre && 'warning'}/> 
                        {errors.Nombre && <span className={styles.danger}>{errors.Nombre}</span>}
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
