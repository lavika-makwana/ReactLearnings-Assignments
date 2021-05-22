import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/Cards';
import Sdata from './components/Sdata';
import './components/Netflix.css'

// import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(<App />, document.getElementById('root') );


ReactDOM.render(
	<>
		<h2 className='header'>List Of Top Netflix Series</h2>
			{ Sdata.map((val, index) => {
				return (
					<Card
						imgsrc={val.imgsrc}
						title={val.title}
						sname={val.sname}
						link={val.links}
						/>
				);
			})}
	</>,
	document.getElementById('root') 
);

reportWebVitals();
