import React from 'react';
import booklist from '../assets/booklist';
import AllBooks from '../assets/allbooks';

class MainComponent extends React.Component {
    state = {
        books: booklist,
        showBooks: true,
    };

    deleteBookState = (index) => {
        const updateBooks = [...this.state.books];
        updateBooks.splice(index, 1);
        this.setState({
            books: updateBooks,
        });
    };

    changeWithInputState = (event, index) => {
        const book = {
            ...this.state.books[index],
        };
        book.BookName = event.target.value;

        const allBooks = [...this.state.books];
        allBooks[index] = book;

        this.setState({
            books: allBooks,
        });
    };

    toggleBooks = () => {
        this.setState({
            showBooks: !this.state.showBooks,
        });
    };

    render() {
        let books = null;
        if (this.state.showBooks) {
            books = (
                <AllBooks
                    books={this.state.books}
                    deleteBookState={this.deleteBookState}
                    changeWithInputState={this.changeWithInputState}
                />
            );
        }

        return (
            <div className="App">
                <h1>Book List</h1>
                <button onClick={this.toggleBooks}>Toggle Books</button>
                {books}
            </div>
        );
    }
}

export default MainComponent;
