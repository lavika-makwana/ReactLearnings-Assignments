import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/Cards'
// import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(<App />, document.getElementById('root') );
ReactDOM.render(
	<>
		<Card
			imgsrc='https://wallpapercave.com/wp/wp4056410.jpg'
			title='A Netflix Original'
			sname='Dark'
			link='https://www.netflix.com/in/title/80990668?source=35'
			/>
	</>,
	document.getElementById('root') 
);

reportWebVitals();
