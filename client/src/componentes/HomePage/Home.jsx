//Hooks
import { useDispatch , useSelector } from "react-redux";
import { useEffect } from "react";


//redux-action
import { getAllDogs , cleanDogs , getTemperament} from "../../redux/actions";

//componentes
import NavBar from "../NavBar/NavBar";

import ContainerDogs from "./ContainerDogs";




const Home = () => {
    //usar reducer
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllDogs());
        dispatch(getTemperament())
        return () => dispatch(cleanDogs())
    }, [ dispatch ])
    
    let  dogs  = useSelector(state => state.allDogs)
    let arrayCheck = useSelector(state => state.temperament)


    return(
        <section>
            <div>
                <NavBar/>
            </div>
            <article >
                <ContainerDogs dogs={dogs} arrayCheck={arrayCheck} />
            </article>
            
        </section>
    )
}

export default Home;