export const validarPost = (inputs) => {
    for (let propiedad in inputs) {
        if (inputs[propiedad] === '') {
            return true
        }
        }
}