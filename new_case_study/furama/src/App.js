import logo from "./logo.svg";
import "./App.css";
import CustomerCreate from "./components/customer/CustomerCreate";
import CustomerEdit from "./components/customer/CustomerEdit";
import CustomerList from "./components/customer/CustomerList";
import Header from "./components/headerfooter/Header";
import Footer from "./components/headerfooter/Footer";
import ServiceList from "./components/service/ServiceList";
import ServiceCreate from "./components/service/ServiceCreate";
import ServiceEdit from "./components/service/ServiceEdit";
import ContractCreate from "./components/contract/ContractCreate";
import ContractList from "./components/contract/ContractList";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./Style.css";
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
          <Route path="/customer/list"  element={<CustomerList></CustomerList>}></Route>
          <Route path="/customer/create"  element={<CustomerCreate></CustomerCreate>}></Route>
          <Route path="/customer/edit"  element={<CustomerEdit></CustomerEdit>}></Route>

          <Route path="/"  element={<ServiceList></ServiceList>}></Route>
          <Route path="/service/create"  element={<ServiceCreate></ServiceCreate>}></Route>
          <Route path="/service/edit"  element={<ServiceEdit></ServiceEdit>}></Route>

          <Route path="/contract/list"  element={<ContractList></ContractList>}></Route>
          <Route path="/contract/create"  element={<ContractCreate></ContractCreate>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
