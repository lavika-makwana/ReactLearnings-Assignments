import React, { useState} from 'react';

function GreetMessage() {
	let time = new Date().toLocaleTimeString();

	const [ctime, setCtime]  = useState(time);

	const UpdateTime = () => {
		time = new Date().toLocaleTimeString();
		setCtime(time);
	};

	setInterval(UpdateTime, 500)

	return(
		<div className='greeting_message'>
			<h3>{ctime}</h3>
		</div>
	)
};

export default GreetMessage;