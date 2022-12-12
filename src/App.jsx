import { Routes, Route } from "react-router-dom";
import './App.css';

/* ------ Páginas ------- */
import PaginaInicio from "./paginas/Inicio.pagina";
import PaginaFavoritos from "./paginas/Favoritos.pagina";
import PaginaDetalle from "./paginas/Detalle.pagina";
import NotFound from "./paginas/NotFound";


import Encabezado from "./componentes/layout/encabezado.componente";

import { Provider } from 'react-redux';

/* --- store ---- */
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Encabezado />
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="favoritos" element={<PaginaFavoritos />} />
          <Route path="detalle/:id" element={<PaginaDetalle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
