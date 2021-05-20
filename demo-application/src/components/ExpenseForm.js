import React, { useState } from 'react';



// this code contains using states with single and multiple states
const ExpenseForm = () => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: ''
	// });
	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
		// setUserInput({
		// 	...userInput, 
		// 	enteredTitle: event.target.value;
		// });
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredAmount: event.target.value;
		// });
	};

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	setEnteredDate: event.target.value;
		// });
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate)
		};
		console.log(expenseData);
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	}; 

 	return(
		<form onSubmit={submitHandler}>
			<h1>User Input</h1>
			<div className='expense_form'> 
				<div className='expense_form_control'>
					<label>Title</label>
					<input type= 'text' onChange={titleChangeHandler} value={enteredTitle}/>
				</div>
				<div className='expense_form_control'>
					<label>Amount</label>
					<input type= 'number' min='0.01' step='0.01' onChange={amountChangeHandler} value={enteredAmount} />
				</div>
				<div className='expense_form_control'>
					<label>Date</label>
					<input type= 'date' min='2019-01-01' max='2022-01-01' onChange={dateChangeHandler} value={enteredDate} />
				</div>
				<div>
					<button className='submit_button' type='submit_button'>Add Expense</button>
				</div>
			</div>
		</form>
	);

};

export default ExpenseForm;