import logo from './logo.svg';
import './components/css/App.css';
import Boton from './components/js/Boton';
import Saludo from './components/js/Saludo';
import Menu from './components/js/Menu';

function App() {
  return (
    <div className="App">
      <div>
        <Menu></Menu>
      </div>
      <header className="App-header">
        <Saludo></Saludo>
        <Boton></Boton>

      </header>
    </div>
  );
}

export default App;