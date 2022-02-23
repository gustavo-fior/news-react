import FormularioInicial from "./components/Formulario";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Trending from "./paginas/Trending";
import TrendingNews from "./paginas/TrendingNews";

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<FormularioInicial />} />
          <Route exact path='/trending' element={<Trending />} />
          <Route exact path='/trending/:trendTitle' element={<TrendingNews />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
