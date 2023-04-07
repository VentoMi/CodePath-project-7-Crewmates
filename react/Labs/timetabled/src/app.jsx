import './app.css';
import Calendar from './components/Calendar';

const App = () => {
  return(
    <div className="App">
    <h1> Itinerary for 7 Days in Chicago 🏙</h1>
    <h2> One week in Chicagoo is wonderful!</h2>
    <Calendar />
    </div>
  );
};

export default App;