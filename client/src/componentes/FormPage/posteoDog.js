import axios from 'axios'

const posteoDog = async(inputs , temperaments) => {
    /* const Temperaments = temperaments.join(', ') */
    const {
        Nombre,
        PesoMin,
        PesoMax,
        AlturaMin,
        AlturaMax,
        AniosMin,
        AniosMax} = inputs 

    const createDog = {
        nombre: Nombre,
        imagen: "https://cdn2.thedogapi.com/images/Sk7Qbg9E7.jpg",
        peso:`${PesoMin} - ${PesoMax}`,
        altura: `${AlturaMin} - ${AlturaMax}`,
        anios_vida:`${AniosMin} - ${AniosMax} years`,
       /*  temperaments: Temperaments */
    }

    const response = await axios.post('http://www.localhost:3001/dogs' , createDog)
    return response
}

export default posteoDog;
