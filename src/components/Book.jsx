// import React from "react";
import '../Stylesheet/Book.css'


let Book = props =>{
	return (
		<div className='book'>
			<h2 onClick={props.deleteBook}>Book Name: {props.BookName}</h2>
			<h4>Writer: {props.BookWriter}</h4>
			<input type="text" onChange={props.inputName} value={props.BookName}/>
		</div>
	)
}

export default Book