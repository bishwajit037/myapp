import React from 'react'
import './App.css'
import Book from './components/Book'

class App extends React.Component{
  state = {
        books: [
          {id:1, BookName:"1984", BookWriter:"George Otwell"},
          {id:2, BookName:"Da Vinci Code", BookWriter:"Dan Brown"},
          {id:3, BookName:"The Alchemist", BookWriter:"Paulo Coelho"}
        ]
      }

  deleteBookState = index => {
    const updateBooks = [...this.state.books];
    updateBooks.splice(index, 1);
    this.setState({
      books : updateBooks
    });
  }

  changeWithInputState = (event, index) => {
    const book = {
      ...this.state.books[index]
    }
    book.BookName = event.target.value;
    const allBooks = [...this.state.books];
    allBooks[index] = book;

    this.setState({
      books : allBooks
    })
  }


  render(){
    const books = this.state.books.map((book, index) => {
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
