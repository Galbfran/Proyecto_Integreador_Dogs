//Hooks
import { useDispatch , useSelector } from "react-redux";
import { useEffect } from "react";


//redux-action
import { getAllDogs } from "../../redux/actions";

//componentes
import NavBar from "../NavBar";
import CardDog from "../Dogs/CardDog";



const Home = () => {
    const dispatch = useDispatch();
    const dogsRender = useSelector(state => state.allDogs)
    console.log(dogsRender)
    useEffect(() => {
        dispatch(getAllDogs())
    }, [])



    return(
        <div>
            <NavBar/>
        {    
            dogsRender.map(dog => {
                return <CardDog 
                    key={dog?.ID_Dogs}
                    id={dog?.ID_Dogs}
                    image={dog?.Imagen}
                    name={dog?.Nombre}
                    temperamento={dog?.Temperamento}
                    peso={dog?.Peso}
                />
                })
            }
        </div>
    )
}

export default Home;