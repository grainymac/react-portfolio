import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../Home/Home'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />} />
        <Route index element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
