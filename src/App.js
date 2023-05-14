import { Route } from 'react-router';
import './App.css';
import { RoutesComponent } from './Routes';
import { Header } from './components/header/Header';

function App() {
  return (
    <>
      <Header/>
      <RoutesComponent/>

    </>
  );
}

export default App;
