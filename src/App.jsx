import React from 'react'
import './App.css'
import Book from './components/Book'

class App extends React.Component{
  state = {
        brand: "Ford",
        model: "Mustang",
        color: "Red",
        year: "1984",
        book: [
          {id:1, BookName:"1984", BookWriter:"George Otwell"},
          {id:2, BookName:"Da Vinci Code", BookWriter:"Dan Brown"},
          {id:3, BookName:"The Alchemist", BookWriter:"Paulo Coelho"}
        ]
      }

  deleteBookState = index => {
    const updateBooks = [...this.state.book];
    updateBooks.splice(index, 1);
    this.setState({
      book : updateBooks
    });
  }

  changeWithInputState = (event, index) => {
    const book = {
      ...this.state.book[index]
    }
    book.BookName = event.target.value;
    const inputBook = [...this.state.book];
    inputBook[index] = book;

    this.setState({
      book : inputBook
    })
  }


  render(){
    const books = this.state.book.map((book, index) => {
      return (
        <div key={book.id}>
          <Book 
            BookName={book.BookName} 
            BookWriter={book.BookWriter} 
            deleteBook = {()=>this.deleteBookState(index)}
            inputName = {(event)=>this.changeWithInputState(event, index)}
          />  
        </div>
      );
    });
    return(
      <div className='App'>
        <h1>Book List</h1>
        {books}
      </div>
    )
  }
  
}
export default App
