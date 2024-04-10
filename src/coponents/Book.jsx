// import React from "react";
import '../Stylesheet/Book.css'

// class Book extends React.Component {
// 	constructor(props){
// 		super(props);
// 	}
// 	render(){
// 		return(
// 			<div>
// 				<h2>Book Name: {this.props.BookName}</h2>
// 				<h4>Writer: {this.props.BookWriter}</h4>
// 			</div>
// 		)
// 	}
// }
let Book = props =>{
	return (
		<div className='book'>
			<h2 onClick={props.change}>Book Name: {props.BookName}</h2>
			<h4>Writer: {props.BookWriter}</h4>
			<input type="text" onChange={props.inputName} value={props.BookName}/>
		</div>
	)
}

export default Book