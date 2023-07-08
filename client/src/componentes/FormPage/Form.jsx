import { useState } from "react";

//componentes
import NavBar from "../NavBar/NavBar";
import validate from "./validate";

//styles
import styles from './Form.module.css'

const Form = () => {
    const [inputs , setInputs] = useState({
        Nombre:'',
        PesoMin:'',
        PesoMax:'',
        AlturaMin:'',
        AlturaMax:'',
        AniosMin:'',
        AniosMax:'',
        Temperamento:[]
    })

    const [errors , setErrors] = useState({
        Nombre:'',
        PesoMin:'',
        PesoMax:'',
        AlturaMin:'',
        AlturaMax:'',
        AniosMin:'',
        AniosMax:'',
        Temperamento:[]
    })

    const arrayInputs = Object.keys(inputs).filter(item => item !== 'Temperamento');
    
 /*    const handlerSubmit = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        })
    } */

    const handlerChange = (event) => {
        const { name, value } = event.target;
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

    return(
        <section>
                <NavBar/>
                <h2>Formulario para crear una raza de Perro</h2>
            <form className={styles.container} >
                {
                    arrayInputs.map(dato => {
                        return(
                            <div className={styles.datosTexto}>
                                <label htmlFor={dato}>{`Dato a Ingresar: ${dato}`}</label>
                                <input type="text" id={dato} name={dato} placeholder={`Ingrese ${dato}: ` } value={inputs[dato]} onChange={handlerChange} className={errors[dato] && 'warning'}/> 
                                {errors[dato] && <span className={styles.danger}>{errors[dato]}</span>}
                                {!errors[dato] && <span></span>}
                            </div>

                        )
                    })
                }


                <label htmlFor="temperamento">Temperamento:</label>
                
                <label htmlFor="">Ejmplo Temp</label>
                <input type="checkbox" name="temp1" id="temp1"/>
                <input type="text" id='temperamento' name='Temperamento' placeholder='Ingrese Temperomento no existente...' onChange={handlerChange} />
                
                <div className={styles.button}>
                    <button >Crear Perro</button>
                    <button type="reset">Reset</button>
                </div>
            </form>
        </section>
    )
}

export default Form;
