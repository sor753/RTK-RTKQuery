import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages';
import Header from './components/Header';
import SingelCocktail from './pages/SingelCocktail';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ marginTop: '10rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cocktail/:id" element={<SingelCocktail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
