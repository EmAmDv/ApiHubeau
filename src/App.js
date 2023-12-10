import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Home from './components/Home';
import Station from './components/Station';

const App = () => {

  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/station/:id" element={<Station />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}
  
export default App