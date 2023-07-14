
const validate = (inputs) => {
        let error = {};

        if (!inputs.Nombre) error.Nombre = 'Se requiere una Raza.' 

        if (parseInt(inputs.PesoMin) <= 0) error.PesoMin = 'Se debe ingresar un Peso mayor a "0"' 
        if (parseInt(inputs.PesoMin) >= 90) error.PesoMin = 'Se debe ingresar un Peso menor a 90 Kilogramos' 
        if (parseInt(inputs.PesoMin) > inputs.PesoMax) error.PesoMin = 'Se debe ingresar un Peso menor o igual al maximo' 
        
        if (parseInt(inputs.PesoMax) <= 0) error.PesoMax = 'Se debe ingresar un Peso mayor a "0"' 
        if (parseInt(inputs.PesoMax) >= 90) error.PesoMax = 'Se debe ingresar un Peso menor a 90 Kilogramos' 
        if (parseInt(inputs.PesoMax) < inputs.PesoMin) error.PesoMax = 'Se debe ingresar un Peso mayor o igual al minimo' 

        if (parseInt(inputs.AlturaMin) <= 0) error.AlturaMin = 'Se debe ingresar una Altura mayor a "0"' 
        if (parseInt(inputs.AlturaMin) >= 20)error.AlturaMin = 'Se debe ingresar una Altura menor a "20"' 
        if (parseInt(inputs.AlturaMin) > inputs.AlturaMax) error.AlturaMin = 'Se debe ingresar un Altura menor o igual al maximo'


        if (parseInt(inputs.AlturaMax) <= 0) error.AlturaMax = 'Se debe ingresar una Altura mayor a "0"' 
        if (parseInt(inputs.AlturaMax) >= 20) error.AlturaMax = 'Se debe ingresar una Altura menor a 20' 
        if (parseInt(inputs.AlturaMax) < inputs.AlturaMin) error.AlturaMax = 'Se debe ingresar un Altura mayor o igual al minimo'

        if (parseInt(inputs.AniosMin) <= 0) error.AniosMin = 'Se debe ingresar una Edad mayor a "0"' 
        if (parseInt(inputs.AniosMin) >= 35) error.AniosMin = 'Se debe ingresar una Edad menor a 35 años' 
        if (parseInt(inputs.AniosMin) > inputs.AniosMax) error.AniosMin = 'Se debe ingresar un Años menor o igual al maximo'
        
        if (parseInt(inputs.AniosMax) <= 0) error.AniosMax = 'Se debe ingresar una Edad mayor a "0"' 
        if (parseInt(inputs.AniosMax) >= 35) error.AniosMax = 'Se debe ingresar una Edad menor a 35 años'
        if (parseInt(inputs.AniosMax) < inputs.AniosMin) error.AlturaMax = 'Se debe ingresar un Años mayor o igual al minimo' 
        
        return error;
}

export default  validate;
