import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/Cards';
import Sdata from './components/Sdata';

// import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(<App />, document.getElementById('root') );

function ncard(val){
	return(
		<Card
			imgsrc={val.imgsrc}
			title={val.title}
			sname={val.sname}
			link={val.links}
			/>
	);
};

ReactDOM.render(
	<>
		<h2>List Of Top Netflix Series</h2>
			{Sdata.map(ncard)}
	</>,
	document.getElementById('root') 
);

reportWebVitals();
