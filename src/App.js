import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './Components/Container';
import Dummy from './Components/Dummy';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Container />}>
            <Route path='/:name' element={<Dummy />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
