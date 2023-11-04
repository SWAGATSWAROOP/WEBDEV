import logo from './logo.svg';
import './App.css';
//Whenever imorting directly from the Arrow Function
import { Welcome } from './component/Swagat';
import Swaroop from './component/Swaroop';

function App() {
  return (
    <div className="App">
      <Welcome />
      <Swaroop />
    </div>
  );
}

export default App;
