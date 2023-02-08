import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../Home/Home'
import About from '../About/About'
import Work from '../Work/Work'
import Contact from '../Contact/Contact'
import Experience from '../Experience/Experience';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/experience' element={<Experience />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
