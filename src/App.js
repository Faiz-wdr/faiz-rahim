import './App.css';
import Router from './Router';
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-257712253-1"; 

ReactGA.initialize(TRACKING_ID);
function App() {
  return (
    <Router />
  );
}

export default App;