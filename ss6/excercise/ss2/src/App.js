import logo from "./logo.svg";
import "./App.css";
import { LibraryList } from "./components/LibraryList";
import { AddLibrary } from "./components/AddLibrary";
import { BrowserRouter,Routes, Route, Router, Switch } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Router>
      <Switch>
        <Route path='/'exact>
        <LibraryList></LibraryList>
        </Route>
        <Route path='/add' exact>
        <AddLibrary></AddLibrary>
        </Route>
      </Switch>
    </Router> */}
    <LibraryList></LibraryList>
      {/* <Router>
        <div className="App">
          <Route path="/" exact component={LibraryList} />
          <Route path="/add" component={AddLibrary} />
        </div>
      </Router> */}
    </>
  );
}

export default App;
