import React from "react";
import { Component } from "react";
class App extends Component{
  constructor(){
    super();
    this.state ={
      studentName : "",
      studentList: ['HaiTT','Trung DP']
    }
  }
  handleChange = (nameStudent) => {
    this.setState({
      studentName: nameStudent
    })
  }
  addStudent(){
    this.setState({
      studentList: [...this.state.studentList,this.state.studentName],
      studentName: ""
    })
  }
  render(){
    return(
      <>
      <div style={{textAlign:"center"}}>
      <h1>Todo List</h1>
      <input value={this.state.studentName} onChange={(nameStudent) => this.handleChange(nameStudent.target.value)}></input>
      <button onClick={()=> this.addStudent()}>Add</button>
      <ul>
          {this.state.studentList.map((element,index) => {
            return <li key={index}>{element}</li>
          })}
      </ul>
      </div>
      </>
    )
  }
}
export default App;