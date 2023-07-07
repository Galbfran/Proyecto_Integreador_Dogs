import { useState } from "react";

//componentes
import NavBar from "../NavBar/NavBar";
//styles
import styles from './Form.module.css'


export const validate = (inputs) => {
    let error = {};

    if (!inputs.Nombre) error.Nombre = 'Se requiere una Raza.' 

    if (parseFloat(inputs.PesoMin) >= 0) error.PesoMin = 'Se debe ingresar un Peso mayor a "0".' 
    if (parseFloat(inputs.PesoMax) <= 90) error.PesoMax = 'Se debe ingresar un Peso menor a 90 Kilogramos' 

    if (parseFloat(inputs.AlturaMin) >= 0) error.AlturaMin = 'Se debe ingresar una Altura mayor a "0".' 
    if (parseFloat(inputs.AlturaMax) <= 1.5) error.AlturaMax = 'Se debe ingresar una Altura menor a 1.5 metros' 

    if (parseInt(inputs.Anios_VidaMin) >= 0) error.Anios_VidaMin = 'Se debe ingresar una Edad mayor a "0".' 
    if (parseInt(inputs.Anios_VidaMax) <= 35) error.Anios_VidaMax = 'Se debe ingresar una Edad menor a 35 años' 
    
    return error;
}


const Form = () => {
    const [inputs , setInputs] = useState({
        Nombre:'',
        Imagen:'',
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
        Imagen:'',
        PesoMin:'',
        PesoMax:'',

        AlturaMin:'',
        AlturaMax:'',


        AniosMin:'',
        AniosMax:'',

        Temperamento:[]
    })

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
                <div className={styles.datosTexto}>
                    <label htmlFor="name">Raza de Perro:</label>
                    <input type="text" id="name" name='Nombre' placeholder='Ingrese Raza...' value={inputs.Nombre}  onChange={handlerChange} className={errors.Nombre && 'warning'}/> 
                </div>
                <div>
                    <label htmlFor="imagen">Imagen de Perro:</label>
                    <input type="text" id="imagen" name='Imagen' placeholder='Direccion de la Imagen...' value={inputs.Imagen} onChange={handlerChange} className={errors.Imagen && 'warning'}/> 
                </div>
                <div className={styles.datos}>
                    <label htmlFor="alturaMin">Altura Minima:</label>
                    <input type="number" id='alturaMin' name='AlturaMin' placeholder='Altura Maxima' value={inputs.AlturaMin} onChange={handlerChange} className={errors.AlturaMin && 'warning'}/>
                    <label htmlFor="alturaMax">Altura Maxima:</label>
                    <input type="number" id='alturaMax' name='AlturaMax' placeholder='Altura Maxima' value={inputs.AlturaMax} onChange={handlerChange} className={errors.AlturaMax && 'warning'}/>
                </div>
                <div className={styles.datos}>
                    <label htmlFor="pesoMin">Peso Minimo:</label>
                    <input type="number" id='pesoMin' name='PesoMin' placeholder='Peso Minimo' value={inputs.PesoMin} onChange={handlerChange} className={errors.PesoMin && 'warning'}/>
                    <label htmlFor="pesoMax">Peso Maximo:</label>
                    <input type="number" id='pesoMax' name='PesoMax' placeholder='Peso Minimo' value={inputs.PesoMax} onChange={handlerChange} className={errors.PesoMax && 'warning'}/>
                </div>
                <div className={styles.datos}>
                    <label htmlFor="aniosMax">Edad Maxima:</label>
                    <input type="number" id='aniosMin' name='AniosMin' placeholder='Vida Minimo' value={inputs.AniosMin} onChange={handlerChange} className={errors.Anios_VidaMin && 'warning'}/>
                    <label htmlFor="aniosMin">Edad Minima:</label>
                    <input type="number" id='aniosMax' name='AniosMex' placeholder='Vida Minimo' value={inputs.AnioMax} onChange={handlerChange} className={errors.Anios_VidaMax && 'warning'}/>
                </div>


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