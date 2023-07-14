import { Link } from "react-router-dom";
import styles from './About.module.css'

const About = () => {
    const imagen = 'https://media.licdn.com/dms/image/D4D35AQHr0PdT6AGMvg/profile-framedphoto-shrink_400_400/0/1686004446866?e=1689292800&v=beta&t=XuZXM4upAsNEWXhvEVfnby2T-T90aEPqDzvZzNhGglY'
    const nombre = "Galbiati Franco"
    const corte = "Ft39-a"
    const github = "https://github.com/Galbfran"
    const linkedin = "Galbiati Franco"
    // modificar para inicio de spa de perros

    return(
        <div>
            <h1>Proyecto Integrador Dogs</h1>
            <div>
                <div className={styles.container}>
                    <img src={imagen} alt={nombre} className={styles.imagen}/>
                <div className={styles.data}>
                    <h2>Nombre: {nombre}</h2>
                    <p>Corte: {corte}</p>
                    <p>Github: {github}</p>
                    <p>Linkedin: {linkedin}</p>
                    <button>
                        <Link to={'/home'}>Entrar al Home</Link>
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default About;