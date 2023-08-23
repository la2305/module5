import React from "react";
import { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      studentList: ["HaiTT", "Trung D P"],
    };
  }

  addStudent = () => {
    let content = document.getElementById("content").value;
      this.setState((element) => ({
        studentList: [...element.studentList,content],
        
      }))
      document.getElementById('content').value =""
  }

  render() {
    return (
      <>
        <div style={{ textAlign: "center" }}>
          <h1>Todo List</h1>
          <input type="text"  id="content"></input>
          <button onClick={() => this.addStudent()}>Add</button>
          <ul>
            {this.state.studentList.map((element, index) => {
              return <li key={index}>{element}</li>;
            })}
          </ul>
        </div>
      </>
    );
  }
}
export default App;
