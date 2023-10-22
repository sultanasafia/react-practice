import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar';

function App() {
  return (
    <div className="App">
      {/* <h1>hello</h1> */}
      <Navbar name= "Tayyaba" myClass="web dev" />
    </div>
  );
}

export default App;
