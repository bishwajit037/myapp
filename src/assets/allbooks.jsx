// import React from 'react';
import Book from '../components/Book';

const AllBooks = (props) => {
    return props.books.map((book, index) => {
        return (
            <div key={book.id}>
                <Book
                    BookName={book.BookName}
                    BookWriter={book.BookWriter}
                    deleteBook={() => props.deleteBookState(index)}
                    inputName={(event) =>
                        props.changeWithInputState(event, index)
                    }
                />
            </div>
        );
    });
};

export default AllBooks;
