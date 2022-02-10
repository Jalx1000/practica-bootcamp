import './App.css';
import Mensaje from './Mensaje';
const Description=()=>{
  return <h1>ESta es la app del curso fullstack en react</h1>
}

const App = () => {
  return (
    <div className="App">
      <br />
      <Description />
      <br />
      <Mensaje color='red'    m essage='Estamos trabajando'/>
      <Mensaje color='yellow' message='en un curso'/>
      <Mensaje color='green'  message='de full stack'/>
      <br />
      <h1>Hola mundo</h1>
      <h1>Hola mundo</h1>
      <h1>Hola mundo</h1>
    </div>
  );
}

export default App;
