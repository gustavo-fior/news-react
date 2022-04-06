import FormularioInicial from "./components/Formulario";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Trending from "./paginas/Trending";
import TrendingNews from "./paginas/TrendingNews";

import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      "Raleway",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif"
    ].join(",")
  }
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
              <Route exact path='/' element={<FormularioInicial />} />
              <Route exact path='/trending' element={<Trending />} />
              <Route exact path='/trending/:trendTitle' element={<TrendingNews />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
