import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter,Routes, Route, Router, Switch } from "react-router-dom";
import { LibraryList } from "./components/LibraryList";
import { AddBook } from "./components/AddBook";
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/create" element={<AddBook></AddBook>}></Route>
        <Route path="/" element={<LibraryList></LibraryList>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
