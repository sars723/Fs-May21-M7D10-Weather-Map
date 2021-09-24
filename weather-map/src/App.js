import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ForcastDisplay from './components/ForcastDisplay';
import NavBar from './components/NavBar';
import Search from './components/Search';

function App() {
  let unix_timestamp = 1632636000
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
var date = new Date(unix_timestamp * 1000);
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
console.log("formatted Time",formattedTime)
  const fetchData=async()=>{
    try {
      const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${process.env.REACT_APP_API_KEY}&units=metric`)
      if(response.ok){
        const fetchedData=await response.json()
        console.log(process.env.REACT_APP_API_KEY)
      }
      else{
        console.log(process.env.REACT_APP_API_KEY)
      }
    } catch (error) {
      console.log(process.env.REACT_APP_API_KEY)
      console.log(error)
    }
  }
  /* fetchData() */
  return (
    <div className="App">
     <NavBar/>
     <Search/>
     <ForcastDisplay/>
    </div>
  );
}

export default App;
