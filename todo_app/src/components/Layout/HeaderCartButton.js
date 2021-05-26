import React, { Fragment } from 'react';
import CartIcon from '../Cart/CartIcon';
// import classes from './HeaderCartBotton.module.css';
import classes from './Header.module.css';

const HeaderCartBotton = () => {
	return(
		<button className={classes.button}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>5</span>
		</button>
	);
};

export default HeaderCartBotton;

// <Button className={classes.button}>
		// 	<span className={classes.icon}>
		// 		<CartIcon />
		// 	</span>
		// 	<span>Your Cart</span>
		// 	<span className={classes.badge}></span>
		// </Button>