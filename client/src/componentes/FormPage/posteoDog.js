import axios from 'axios'

const posteoDog = async(inputs , temperaments) => {
    const Temperaments = temperaments.join(', ')
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
        temperamento: `${Temperaments}`
    }
    console.log(typeof Temperaments)
    const response = await axios.post('http://www.localhost:3001/dogs' , createDog);
    const dogCreate =  responseMessaje(response)

    return dogCreate
}

const responseMessaje = (response) => {
    let { ID_Dogs , Nombre} = response.data
    return `El Perro fue creado Correctamente. Con ID: ${ID_Dogs}, Nombre: ${Nombre}`
}

export default posteoDog;
