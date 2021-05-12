import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import GreetMessage from './components/GreetMessage';
import './App.css';

const App = () => {
  
  const [inputList, setInputList] = useState(''); 

  const [Items, setItems] = useState([]);

  const itemEvents = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList('');
  };


  const deleteItem = (id) => {  
    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
          return index !== id;
      })
    });
  };

  return (
    <div className='main_div'>
      <GreetMessage></GreetMessage>
      <div className='center_div'>
        <h1>To Do List</h1>
        <br/>
        <input type='text' placeholder='Add a Item' onChange={itemEvents}/> 
        <button onClick={listOfItems}> + </button>
        <ol>
          {Items.map((item_val, index) => { 
            return <ToDoList
                id= {index}
                key= {index} 
                text= {item_val}
                onSelect= {deleteItem}
            />;
          })}
          
        </ol>
      </div>
    </div>
  );
};
  
export default App;