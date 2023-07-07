import NavBar from "../NavBar/NavBar";
import styles from './Form.module.css'

const Form = () => {


    return(
        <section>
                <NavBar/>
                <h2>Formulario para crear una raza de Perro</h2>
            <form className={styles.container}>
                <label htmlFor="perro">Raza de Perro:</label>
                <input type="text" id="perro" palyolder='Caniche' /> 

                <label htmlFor="alturaMin">Altura Minima:</label>
                <input type="text"  id='alturaMin'/>
                <label htmlFor="alturaMin">Altura Maxima:</label>
                <input type="text"  id='alturaMin'/>

                <label htmlFor="pesoMin">Peso Minimo:</label>
                <input type="text"  id='pesoMin'/>
                <label htmlFor="pesoMax">Peso Maximo:</label>
                <input type="text"  id='pesoMax'/>
                
                <label htmlFor="aniosMin">Años de Vida Minimo:</label>
                <input type="text"  id='aniosMin'/>
                <label htmlFor="aniosMax">Años de Vida Maximo:</label>
                <input type="text"  id='aniosMax'/>

                <label htmlFor="temperamento">Temperamento:</label>
                <div>
                <label htmlFor="temp1">Ejmplo Temp</label>
                <input type="checkbox" name="temp1" id="temp1" />
                </div>
                


                <input type="text" id='temperamento' />
                <button >Crear Perro</button>
                <button type="reset">Reset</button>
            </form>
        </section>
    )
}

export default Form;