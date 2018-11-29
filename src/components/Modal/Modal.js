/* eslint-disable react/jsx-handler-names,react/prop-types */
import React, { Component } from "react";


import { string, bool, func, array, number } from "prop-types";

import { Modal, Button, FormControl} from "react-bootstrap";

import classes from "./Modal.less";

class ModalComponent extends Component {
	static propTypes = {
		visibility: bool.isRequired,
		visibilityChange: func,
		modalSave: func,
		changeProductDataSaga: func,
		productData: array,
		totalPrice: number,
		incrementProduct: func,
		decrementProductBasket: func,
		nextBtnClick: func
	};

	onIncrementBtnClick = (_id) => (event) => {
		event.stopPropagation();

		this.props.incrementProduct(_id);
	}

	onDecrementBtnClick = (_id) => (event) => {
		event.stopPropagation();

		this.props.decrementProductBasket(_id);
	}

	onDeleteProductBtnClick = (_id) => (event) => {
		event.stopPropagation();

		this.props.deleteProductBasket(_id);
	}

	onSaveBtnClick = () => {
		this.props.nextBtnClick();
	}

	closeBtnClick = () => {
		this.props.visibilityChange();
	}

	renderCuurrency = (currency) => {
		switch (currency) {
			case "ua":
				return ('грн');
			case "rub":
				return ('руб');
			case "usd":
				return ('$');
		}
	}


	renderSingleProduct = (product) => {
		return (
			<div className={classes.modalProductWrapper}>
				<div className={classes.modalProductLeftBlock}>
					<p>{ product.name }</p>
				</div>

				<div className={classes.modalProductRigthBlock}>
					<div className={classes.modalProductButtonWrapper}>
						<button className={ product.count === 1 && classes.modalBtnDisable } disabled={ product.count === 1 && true } onClick={this.onDecrementBtnClick(product._id)}> - </button>
						<p>{ product.count }</p>
						<button onClick={this.onIncrementBtnClick(product._id)}> + </button>
					</div>
					<div  className={classes.modalProductCloseWrapper}>
						<p className={classes.modalProductPrice}>{`${product.price} ${this.renderCuurrency(product.currency)}`}</p>
						<a onClick={this.onDeleteProductBtnClick(product._id)}>&#10060;</a>
					</div>
				</div>
			</div>
		)
	}

	render() {
		const { visibility, productData, totalPrice } = this.props;

		return (
			<Modal className={classes.modal} show={visibility} onHide={this.closeBtnClick}>
				<Modal.Header closeButton className={classes.modalHeader}>
					<Modal.Title>Корзина товаров</Modal.Title>
				</Modal.Header>

				<Modal.Body>

					{ productData.map((product) => {return this.renderSingleProduct(product)}) }

				</Modal.Body>
				<Modal.Footer>

					<div  className={classes.modalFooter}>
						<span className={classes.modalFooterHintText}>Итого: <span className={classes.modalFooterBoltText}>{ totalPrice }</span> руб</span>
					</div>
					<div className={classes.modalButton}>
						<Button onClick={this.closeBtnClick}>Продолжать покупки</Button>
						<Button bsStyle="primary" onClick={this.onSaveBtnClick}>Далее</Button>
					</div>
				</Modal.Footer>
			</Modal>
		);
	}
}


export default ModalComponent;

