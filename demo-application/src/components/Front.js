import React from 'react';
import './Front.css'

const Front = () => {
	return(
		<div className='row'>
		  <div className='column'>
		    <div className='card'>
		    	<label>User name</label>
		      <input type='text'/>
		      <label>Age (years)</label>
		      <input type='number'/>
		    </div>
		  </div>
  	</div>
	);
};

export default Front;