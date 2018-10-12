import React, { Component } from 'react';
import { string } from "prop-types";

import { Grid, Row, Col } from 'react-bootstrap';

import classes from "./Product.less";

class Product extends Component {
	static propTypes = {
		label: string,
		description: string,
		img: string,
		price: string,
	}

	renderPopup = () => {
		const { label, description, img, price } = this.props;

		return (
			<div className={classes.productPopup}>
				<p className={classes.productLabel}>
					{ label }
				</p>
				<img className={classes.productImage} src={img} alt="none"/>

				<p className={classes.productDescription }>
					{ description }
				</p>

				<p className={classes.productPrice}>
					{ price }
				</p>

				<a className={classes.productButton}>
					Добавить в корзину
				</a>
			</div>
		);
	}

	render() {
		const { label, description, img, price } = this.props;

		return (
			<React.Fragment>
			<div className={classes.product}>
					<p className={classes.productLabel}>
						{ label }
					</p>
					<img className={classes.productImage} src={img} alt="none"/>

					<p className={classes.productDescription }>
						{ description }
					</p>

					<p className={classes.productPrice}>
						{ price }
					</p>

					<a className={classes.productButton}>
						Добавить в корзину
					</a>
			</div>
			</React.Fragment>
		);
	}
}

export default Product;
