import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktail/:id" element={<div>Single Cocktail</div>} />
      </Routes>
    </div>
  );
}

export default App;
