import Container from './components/layout/Container';
import Calculate from './components/projects/Calculate';


function App() {

  const options = ['Somar', 'Subtrair', 'Multiplicar', 'Dividir']

  return (
    <Container customClass="min-height">
      <h1>Calculadora em React ⚛</h1>
      <Calculate  options ={options}/>
    </Container>
  );
}

export default App;
