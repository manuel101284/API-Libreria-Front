import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SectionAuthor from './components/SectionAuthor';
import SectionBook from './components/SectionBook';
import AddAuthor from './components/AddAuthor';
import GetAllAuthors from './components/GetAllAuthors';
import GetOneAuthor from './components/GetOneAuthor';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Autores" element={<SectionAuthor />} />
        <Route path="Autores/AddAuthor" element={<AddAuthor />} />
        <Route path="Autores/GetAllAuthors" element={<GetAllAuthors />} />
        <Route path="Autores/GetOneAuthor" element={<GetOneAuthor />} />
        <Route path="Libros" element={<SectionBook />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
