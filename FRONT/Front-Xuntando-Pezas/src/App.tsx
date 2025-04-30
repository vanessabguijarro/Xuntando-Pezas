import { BrowserRouter } from 'react-router-dom';
import { Proveedorcontexto } from './0.CONTEXTO.App';
import './App.css'
import LogueoApp from './LogueoApp/Logueo.App';
import RutasPublicasApp from './RUTAS/Rutas.Publicas.App';
import NewCustomer from './PAXINAS/PRIVADAS/NewCustomer';

function App() {

  return (
    <div className="app">
      <NewCustomer />
    </div>
  )
}

export default App
