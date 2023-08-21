import { Component } from "react";

class StudentinfoComponent extends Component {
  constructor() {
    super();
    this.state = {
      studentList: [
        { id: 1, name: "La", age: 4, address: "45 Điện Biên Phủ" },
        { id: 2, name: "Li", age: 5, address: "50 Điện Biên Phủ" },
        { id: 3, name: "Le", age: 6, address: "55 Điện Biên Phủ" },
      ],
    };
  }
  render() {
    return(
    <>
      <table style={{textAlign:"center",border: "1px solid"}}>
        <tr style={{textAlign:"center",border: "1px solid"}}>
          <th style={{textAlign:"center",border: "1px solid"}}>Id</th>
          <th style={{textAlign:"center",border: "1px solid"}}>Name</th>
          <th style={{textAlign:"center",border: "1px solid"}}>Age</th>
          <th style={{textAlign:"center",border: "1px solid"}}>Address</th>
        </tr>
      
      {this.state.studentList.map((element, index) => {
        return (
            <tr key={index} style={{textAlign:"center",border: "1px solid"}}>
                <td style={{textAlign:"center",border: "1px solid"}}>{element.id}</td>
                <td style={{textAlign:"center",border: "1px solid"}}>{element.name}</td>
                <td style={{textAlign:"center",border: "1px solid"}}>{element.age}</td>
                <td style={{textAlign:"center",border: "1px solid"}}>{element.address}</td>
            </tr>
        )
      })}
      </table>
    </>
    )
  }
}
export default StudentinfoComponent;
