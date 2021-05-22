import React from 'react';
import './Netflix.css';	

function Card(props){
	return(
		<div className='column'>
			<div className='card'>
				<img src={props.imgsrc} alt='picture' className='card__img' />
				<div className='card__info'>{props.sname}
					<span className='card__category'></span>
					<h3 className='card__title'>{props.title}</h3>
					<a href='' target='_blank'>
						<button>Watch Now</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;