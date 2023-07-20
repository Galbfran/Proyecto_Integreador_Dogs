import { Link } from "react-router-dom";
import styles from './About.module.css'

const About = () => {
    const imagen = 'https://media.licdn.com/dms/image/D4D35AQHr0PdT6AGMvg/profile-framedphoto-shrink_400_400/0/1686004446866?e=1690218000&v=beta&t=cAVgsyW-Aa4JTOiMpsEmgOOWLGWmmSZNjhl5RXNV7dQ'
    const nombre = "Galbiati Franco"
    const corte = "Ft39-a"
    const github = "https://github.com/Galbfran"
    const linkedin = "https://www.linkedin.com/in/franco-galbiati/"

    return(
        <div>
            <h2>Proyecto Integrador Dogs</h2>
            <div>
                <div className={styles.container}>
                    <img src={imagen} alt={nombre} className={styles.imagen}/>
                <div className={styles.data}>
                    <h2>Nombre: {nombre}</h2>
                    <p>Corte: {corte}</p>
                    <p>Github: <a>{github}</a></p>
                    <p>Linkedin:<a>{linkedin}</a> </p>
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