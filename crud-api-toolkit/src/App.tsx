import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './UserPost';
import CreatePost from './UserPost/CreatePost';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createPost" element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
