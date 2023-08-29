// import { Route,Routes } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import editStudent from './components/EditStudent';

function App() {
  return (
    <Routes>
      <Route path='/' element={<StudentList></StudentList>}></Route>
      <Route path='add' element={<AddStudent></AddStudent>}></Route>
      <Route path='edit/:id' element={<editStudent></editStudent>}></Route>
    </Routes>
  );
}

export default App;
