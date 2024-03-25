import logo from './logo.svg';
import './App.css';
import { PropDrilling } from './components/PropDrilling.tsx';
import {ContextProvider} from './context/ContextProvider.tsx'



function App() {
  return (
    // <PropDrilling level = {1} />
    <ContextProvider level = {4} />
    
  );
}

export default App;
