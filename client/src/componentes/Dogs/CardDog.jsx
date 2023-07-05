import { Link } from "react-router-dom";


const CardDog = ({id , image , name , altura , peso , vida , temperamento}) => {
    return(
        <div>
            <h2><Link to={`/detail/${id}`} >Raza: {name}</Link></h2>
            <img src={image} alt={name} />
            <p>ID_Dog: {id}</p>
            <p>Altura: {altura}</p>
            <p>Peso: {peso}</p>
            <p>Vida: {vida}</p>
            <p>Temperamento: {temperamento}</p>
        </div>
    )
}

export default CardDog;
