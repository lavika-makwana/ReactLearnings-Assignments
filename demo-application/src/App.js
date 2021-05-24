import React, {useState} from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
  	setUsersList((preUsersList) => {
  		return [
  			...preUsersList,
  			{name: uName, age: uAge, id: Math.random().toString() },
  		];
  	});
  };

  return (
	  <div>
	  	<AddUser onAddUser={addUserHandler} />
	  	<UsersList users={usersList} />
	  </div>
  );
};
  
export default App;