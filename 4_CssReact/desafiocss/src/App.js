import './App.css';
import CarDetails from './components/CarDetails';

function App() {

  const cars = [
    { id: 1, marca: "Fiat", cor: "Prata", km: "35000", carroNovo: false },
    { id: 2, marca: "Chevrolet", cor: "Branco", km: "0", carroNovo: true },
    { id: 3, marca: "Ford", cor: "preto", km: "15000", carroNovo: false },
  ]
  return (
    <div className="App">
      <h1>Desafio módulo css</h1>

      {cars.map((car) => (
        <CarDetails
          marca={car.marca}
          cor={car.cor}
          km={car.km}
          carroNovo={car.carroNovo}
        />
      ))}
    </div>
  );
}

export default App;
