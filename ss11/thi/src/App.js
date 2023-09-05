import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom';
import ClothingList from './components/ClothingList';
import ClothingEdit from './components/ClothingEdit';
import ClothingCreate from './components/ClothingCreate';

function App() {
  return (
    <Routes>
      <Route path='/edit/:id' element ={<ClothingEdit></ClothingEdit>}></Route>
      <Route path='/create' element={<ClothingCreate></ClothingCreate>}></Route>
      <Route path='/' element={<ClothingList></ClothingList>}></Route>
    </Routes>
  );
}

export default App;
