import './App.css'
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import Form from './components/Form/Form'; 
import { Boton } from './components/Boton/Boton';

function App() {
  return (
    <div>
      <Header />
      <Boton color={"green"} texto={"Saludar"} />
      <Form />
      <Footer />
    </div>
  )
}

export default App;
