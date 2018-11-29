import React, { Component, Fragment } from 'react';
import { array, func } from "prop-types";

import classnames from "classnames";

import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';

import ModalComponent from "../Modal/Modal";
import ModalSendProduct from "../ModalSendProduct/ModalSendProduct";

import classes from "./Basket.less";
import {connect} from "react-redux";
import * as basketActions from "../../modules/basket/basket.actions";

class Basket extends Component {
	static propsTypes = {
		basket: array,
		addProduct:func,
		decrementProduct: func,
		deleteProduct: func
	}

	state = {
		modalVisibility: false,
		secondStepModalVisibility: false
	}

	modalVisibilityChange = () => {
		this.setState({
			modalVisibility: !this.state.modalVisibility
		})
	}

	incrementProduct = (_id) => {
		this.props.addProduct({_id, increment: true});
	}

	decrementProductBasket = (_id) => {
		this.props.decrementProduct(_id);
	}

	deleteProductBasket = (_id) => {
		if (this.props.basket.length === 1) {
			this.modalVisibilityChange();
		}

		this.props.deleteProduct(_id);
	}

	countProductInBasket = () => {
		const { basket } = this.props;

		let count = 0;
		basket.map(product => {
			count += product.count
		});

		return count;
	}

	secondStepModalVisibilityChange = () => {
		this.setState({
			secondStepModalVisibility: !this.state.secondStepModalVisibility
		})
	}


	returnProductData() {
		const { products, basket } = this.props;

		let productsData = [];
		let totalPrice = 0;

		basket.map((item) => {

			const productIndex = products.findIndex((product) => { return  product._id === item._id });
			totalPrice += products[productIndex].price * item.count;

			productsData.push({
				_id: item._id,
				name: products[productIndex].name,
				count: item.count,
				price: products[productIndex].price,
				currency: products[productIndex].currency,
			});
		})

		return { productsData, totalPrice};
	}

	render() {
		const { basket } = this.props;

		const { modalVisibility, secondStepModalVisibility } = this.state;
		const basketShowClass = classnames(classes.basket, {[classes.show]:basket.length > 0 });

		const { productsData, totalPrice} = this.returnProductData();

		return (
			<Fragment>
				<ModalComponent
					visibility={(modalVisibility && !secondStepModalVisibility)}
					visibilityChange={this.modalVisibilityChange}
					productData={productsData}
					totalPrice={totalPrice}
					incrementProduct={this.incrementProduct}
					decrementProductBasket={this.decrementProductBasket}
					deleteProductBasket={this.deleteProductBasket}
					nextBtnClick={this.secondStepModalVisibilityChange}
				/>

				<ModalSendProduct
					visibility={secondStepModalVisibility}
					visibilityChange={this.secondStepModalVisibilityChange}
				/>
				<div className={basketShowClass} onClick={this.modalVisibilityChange}>
					<div className={classes.basketCounter}>
						<p> { this.countProductInBasket() }</p>
					</div>
						<Glyphicon className={classes.basketIcon} glyph="shopping-cart" />
				</div>
			</Fragment>
		);
	}
}

function mapStateToProps({ basket, product}) {
	return {
		basket: basket.basket,
		products: product.products
	};
}

export default connect(mapStateToProps, { ...basketActions, })(Basket);
