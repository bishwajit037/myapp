import React from 'react'
//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import Person from './coponents/Person'
import Book from './coponents/Book'

class App extends React.Component{
  state = {
        brand: "Ford",
        model: "Mustang",
        color: "Red",
        year: "1984",
        book: [
          {BookName:"1984", BookWriter:"George Otwell"},
          {BookName:"Da Vinci Code", BookWriter:"Dan Brown"},
          {BookName:"The Alchemist", BookWriter:"Paulo Coelho"}
        ]
      }

  changeWithInputState = e =>{
    this.setState({
      book: [
        {BookName: e.target.value, BookWriter:"George Otwell"},
        {BookName:"Da Vinci Code", BookWriter:"Dan Brown"},
        {BookName:"The Alchemist", BookWriter:"Paulo Coelho"}
      ]
    })
  }

  changeBookName = newBookName =>{
    this.setState({
      book: [
        {BookName:newBookName, BookWriter:"George Otwell"},
        {BookName:"Da Vinci Code", BookWriter:"Dan Brown"},
        {BookName:"The Alchemist", BookWriter:"Paulo Coelho"}
      ]
    })
  }

  render(){
    console.log(this.state.book);
    return(
      <div className='App'>
        <h1>My {this.state.brand}</h1>
        <p>It is a {this.state.color} {this.state.model}</p>
        <hr />

        <button onClick={()=> this.changeBookName("1989")}>Change Book Name</button>
        <input type="text" onChange={this.changeWithInputState} />

        <Book BookName={this.state.book[0].BookName} BookWriter={this.state.book[0].BookWriter} 
        inputName={this.changeWithInputState}/>
        <Book BookName={this.state.book[1].BookName} BookWriter={this.state.book[1].BookWriter} />
        <Book BookName={this.state.book[2].BookName} BookWriter={this.state.book[2].BookWriter} change= {this.changeBookName.bind(this, "1990")}/>
      </div>
    )
  }
  
}

// function App() {
//   return (
//       <div >
//         <h1>Hello World!</h1>
//         <Person name="Karim" age="25">I am some extra info.</Person>
//         <Person name="Suheni" age="18"/>
//         <Person name="Bishwajit" age="15"/>
//         <Person name="Bishnu" age="65"/>
//       </div>
//   )
// }

// function Person(){
//   return (
//     <div>
//       <h1>I am a person</h1>
//     </div>
//   )
// }
export default App
