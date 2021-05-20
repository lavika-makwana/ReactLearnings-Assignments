import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/Cards';
import Sdata from './components/Sdata';

// import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(<App />, document.getElementById('root') );
ReactDOM.render(
	<>
		<h2>List Of Top Netflix Series</h2>
		<Card
			imgsrc={Sdata[0].img}
			title={Sdata[0].title}
			sname={Sdata[0].sname}
			imgsrc={Sdata[0].imgsrc}
			/>
	</>,
	document.getElementById('root') 
);

reportWebVitals();
