import './App.css'
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  const arrayProductos = [
    {id: 1, nombre: "Remera", precio: 45000, descripcion: "Remera de algodon"},
    {id: 2, nombre: "Pantalon", precio: 89999, descripcion: "Pantalon de jean"},
    {id: 3, nombre: "Buzo", precio: 2500, descripcion: "Buzo oversize"}
  ];
  //const prod = {nombre: "Remera", precio: 2500, descripcion: "lalalala"};

  return (
    <>
      <div>
        <Header/>
        <ItemListContainer 
          titulo={"Bienvenidos a la tienda de Software"}
          productos={arrayProductos}
        />
        <Footer/>
      </div>
    </>
  )
}

export default App
