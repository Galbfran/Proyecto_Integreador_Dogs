import { Routes , Route } from "react-router-dom";

//Pages
import Home from './componentes/HomePage/Home';
import Error from './componentes/ErrorPage/Error';
import Detail from './componentes/DetailPage/Detail';
import Form from './componentes/FormPage/Form';
import Inicio from './componentes/InicioPage/Inicio';





function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/detail" element={<Detail/>}/>
        <Route path="/error" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
