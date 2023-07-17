import axios from "axios"

export const deleteDog = async(id) => {
    try {
        let dogDelete = await axios.delete(`http://www.localhost:3001/dogs/${id}`)
        return alert(dogDelete.data.message)
    } catch (error) {
        return alert(error.message)
    }
}