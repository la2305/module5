
import './index.css';
import ReactDom from "react-dom/client";

const students = [{
  company: 'Le Quang Phuoc',
  contract: '0338210411',
  country: 'Ha lam'
},
{
  company: 'Le Quang Phuoc',
  contract: '0338210411',
  country: 'Ha lam'
},
{
  company: 'Le Quang Phuoc',
  contract: '0338210411',
  country: 'Ha lam'
}];


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Students</h1>
    <table>
      <tr>
        <th>company</th>
        <th>contract</th>
        <th>country</th>
      </tr>
    {students.map(students => (
      <tr>
        <td>{students.company}</td>
        <td>{students.contract}</td>
        <td>{students.country}</td>
      </tr>
    ))}
    </table>
  </div>
);