import React, { Component } from 'react';
import { string, func } from "prop-types";

import { Grid, Row, Col } from 'react-bootstrap';

import * as basketActions from "../../modules/basket/basket.actions";

import classes from "./Product.less";
import { connect } from "react-redux";

class Product extends Component {
	static propTypes = {
		label: string,
		description: string,
		img: string,
		price: string,
		id: string,
		addProduct: func

	}

	onAddBtnClick = () => {
		this.props.addProduct({_id:this.props._id});
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

					<a onClick={this.onAddBtnClick} className={classes.productButton}>
						Добавить в корзину
					</a>
			</div>
			</React.Fragment>
		);
	}
}

export default connect(null, { ...basketActions })(Product);
