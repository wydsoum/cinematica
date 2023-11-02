import Header from './components/Header/Header';
import './App.css';
import SimpleBottomNavigation from './components/MainNav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from '@mui/material/Container';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';

function App() {
  return (
    <BrowserRouter>
     <Header />
     <div className="app">
      <Container>
        <Routes>
          <Route path="/" element={<Trending />} exact />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-series" element={<Series />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Container>
     </div>

     <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
