import FormularioInicial from "./components/Formulario";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Trending from "./paginas/Trending";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<FormularioInicial/>}/>
        <Route exact path='/trending' element={<Trending/>}/>
        <Route exact path='/trending/:trend' element={<TrendingNews/>}/>
      </Routes>
    </Router>
  );
}

export default App;
