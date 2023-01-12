import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import News from './pages/news/News';
import Gallery from './pages/gallery/Gallery';
import Contact from './pages/contact/Contact';
import Pizza from './components/pizza/Pizza';

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/menu" exact element={<Menu/>} />
        <Route path="/news" exact element={<News/>} />
        <Route path='/contact' exact element={<Contact/> } />
        <Route path="/gallery" exact element={<Gallery/>} />
        <Route path="/pizza" exact element={<Pizza/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
