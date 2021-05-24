import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
	const [enteredUsername, SetenteredUsername] = useState('');

	const [enteredAge, SetenteredAge] = useState('');

	const [error, setError] = useState()

	const addUserHandler = (event) => {
		event.preventDefault();

		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
			setError({
				title: 'Invalid Input',
				message: 'Please enter a valid name and age!'
			});
			return;
		}
		// used + here to force a conversion for a age to be a number
		if (+enteredAge < 1){
			setError({
				title: 'Invalid age',
				message: 'Please enter a valid age < 0'
			});
			return;
		}

		props.onAddUser(enteredUsername, enteredAge) ;
		SetenteredUsername('');
		SetenteredAge('');
	};

	const usernameChangeHandler = (event) => {
		SetenteredUsername(event.target.value);
	};

	const ageChangeHandler = (event) => {
		SetenteredAge(event.target.value);
	};

	const errorHandler = (event) => {
		setError(null);
	};

	return(
		<div>
		  {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<lable>User Name</lable>
					<input id='username' type='text' value={enteredUsername} onChange={usernameChangeHandler} />
					<lable htmlFor='age'>Age(years)</lable>
					<input id='age' type='number' value={enteredAge	} onChange={ageChangeHandler} />
					<Button type='submit'>Add User</Button>
				</form>	
			</Card>
		</div>
	);
};

export default AddUser;