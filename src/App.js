import logo from './logo.svg';
import './App.css';
import { PropDrilling } from './components/PropDrilling.tsx';
import {ContextProvider} from './context/ContextProvider.tsx'
import Login from './components/forms/Login.tsx';
import Signup from './components/forms/Signup.tsx';



function App() {
  return (
    <>
    {/* <PropDrilling level = {1} />
    <ContextProvider /> */}
    <Login />
    <Signup />
    </>
  );
}

export default App;
