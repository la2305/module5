import logo from './logo.svg';
import './App.css';
import CustomerCreate from './components/customer/CustomerCreate';
import CustomerEdit from './components/customer/CustomerEdit'
import CustomerList from './components/customer/CustomerList'
import Header from './components/headerfooter/Header'
import Footer from './components/headerfooter/Footer'
import ServiceList from './components/service/ServiceList'
import ServiceCreate from './components/service/ServiceCreate'
import ServiceEdit from './components/service/ServiceEdit'
import ContractCreate from './components/contract/ContractCreate'
import ContractList  from './components/contract/ContractList';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Style.css';
function App() {
  return (
    <>
    <CustomerCreate />
    <CustomerEdit/>
    <CustomerList></CustomerList>
    <Header></Header>
    <Footer></Footer>
    <ServiceList></ServiceList>
    <ServiceCreate></ServiceCreate>
    <ServiceEdit></ServiceEdit>
    <ContractCreate></ContractCreate>
    <ContractList></ContractList>
    </>
  );
}

export default App;
