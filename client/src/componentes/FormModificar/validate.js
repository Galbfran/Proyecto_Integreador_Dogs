
const validate = (inputs) => {
        let error = {};

        if (parseInt(inputs.pesoMin) <= 0) error.pesoMin = 'Se debe ingresar un peso mayor a "0"' 
        if (parseInt(inputs.pesoMin) >= 90) error.pesoMin = 'Se debe ingresar un peso menor a 90 Kilogramos' 

        
        if (parseInt(inputs.pesoMax) <= 0) error.pesoMax = 'Se debe ingresar un peso mayor a "0"' 
        if (parseInt(inputs.pesoMax) >= 90) error.pesoMax = 'Se debe ingresar un peso menor a 90 Kilogramos' 
        if (parseInt(inputs.pesoMax) < inputs.pesoMin) error.pesoMax = 'Se debe ingresar un peso mayor o igual al minimo' 

        if (parseInt(inputs.alturaMin) <= 0) error.alturaMin = 'Se debe ingresar una altura mayor a "0"' 
        if (parseInt(inputs.alturaMin) >= 20)error.alturaMin = 'Se debe ingresar una altura menor a "20"' 



        if (parseInt(inputs.alturaMax) <= 0) error.alturaMax = 'Se debe ingresar una altura mayor a "0"' 
        if (parseInt(inputs.alturaMax) >= 20) error.alturaMax = 'Se debe ingresar una altura menor a 20' 
        if (parseInt(inputs.alturaMax) < inputs.alturaMin) error.alturaMax = 'Se debe ingresar un altura mayor o igual al minimo'

        if (parseInt(inputs.añosMin) <= 0) error.añosMin = 'Se debe ingresar una Edad mayor a "0"' 
        if (parseInt(inputs.añosMin) >= 35) error.añosMin = 'Se debe ingresar una Edad menor a 35 años' 

        
        if (parseInt(inputs.añosMax) <= 0) error.añosMax = 'Se debe ingresar una Edad mayor a "0"' 
        if (parseInt(inputs.añosMax) >= 35) error.añosMax = 'Se debe ingresar una Edad menor a 35 años'
        if (parseInt(inputs.añosMax) < inputs.añosMin) error.añosMax = 'Se debe ingresar un Años mayor o igual al minimo' 
        
        return error;
}




export default  validate;


