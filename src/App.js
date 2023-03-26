import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Components/Banner';
import Navigation from './Components/Navigation';
import Registration from './Components/Registration';
import Students from './Components/Students';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>

      <Routes>
        <Route path="/home" element={<Banner></Banner>}></Route>
        <Route path="/register" element={<Registration></Registration>}></Route>
        <Route path="/students" element={<Students></Students>}></Route>
      </Routes>

    </div>
  );
}

export default App;
