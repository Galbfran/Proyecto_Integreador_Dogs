// routes
import { Routes , Route } from "react-router-dom";

//redux


//Pages
import Home from './componentes/HomePage/Home';
import Error from './componentes/ErrorPage/Error';
import Detail from './componentes/DetailPage/Detail';
import Form from './componentes/FormPage/Form';
import Inicio from './componentes/InicioPage/Inicio';
import About from "./componentes/About/About";
import FormModificar from "./componentes/FormModificar/FormModificar";
import NavBar from "./componentes/NavBar/NavBar";

import { useLocation} from "react-router-dom";

//indico las diferetes rutas con el path='/...' element renderiza componente padre
// navBar no se renderiza en path='/' 

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname === '/' || <NavBar/>}
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/detailmodificar/:id" element={<FormModificar/>}/>
        <Route path="/error" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
