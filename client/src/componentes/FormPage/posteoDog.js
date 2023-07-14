import axios from 'axios'

const posteoDog = async(inputs , temperaments) => {
    const temperamento = temperaments.join(', ')
    const {
        nombre,
        pesoMin,
        pesoMax,
        alturaMin,
        alturaMax, 
        aniosMin,
        aniosMax} = inputs 

    const createDog = {
        nombre: nombre,
        imagen: "https://cdn2.thedogapi.com/images/Sk7Qbg9E7.jpg",
        peso:`${pesoMin} - ${pesoMax}`,
        altura: `${alturaMin} - ${alturaMax}`,
        anios_vida:`${aniosMin} - ${aniosMax} years`,
        temperamento: `${temperamento}`
    }
    const response = await axios.post('http://www.localhost:3001/dogs' , createDog);
    const dogCreate =  responseMessaje(response)

    return dogCreate
}

const responseMessaje = (response) => {
    let { idDogs , nombre} = response.data
    return `El Perro fue creado Correctamente. Con ID: ${idDogs}, Nombre: ${nombre}`
}

export default posteoDog;
