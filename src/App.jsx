import React from 'react'
import './App.css'
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
    const books = this.state.book.map((book, index) => {
      return (
        <div key={index}>
        <Book BookName={book.BookName} BookWriter={book.BookWriter} />
        </div>
      );
    });
    return(
      <div className='App'>
        <h1>My {this.state.brand}</h1>
        <p>It is a {this.state.color} {this.state.model}</p>
        <hr />

        <button onClick={()=> this.changeBookName("1989")}>Change Book Name</button>
        <input type="text" onChange={this.changeWithInputState} />
        {books}
      </div>
    )
  }
  
}
export default App
