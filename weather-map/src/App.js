import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ForcastDisplay from './components/ForcastDisplay';
import NavBar from './components/NavBar';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Search/>
     <ForcastDisplay/>
    </div>
  );
}

export default App;
