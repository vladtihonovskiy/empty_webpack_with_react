import React, { Component } from 'react';
import { array } from "prop-types";

import { Grid, Row, Col } from 'react-bootstrap';

import Product from "../Product/Product";

import classes from "./Products.less";

class Products extends Component {
	static propsTypes = {
		products: array
	}

	renderSingleProduct = () => {
		return this.props.products.map((product) => {
			return (
				<Product
					key={product._id}
					description={product.description}
					label={product.name}
					img={product.imgUrl}
					price={product.price}
					_id={product._id}
				/>
			);
		});
	}

	renderTwoProducts = () => {
		return this.props.products.map((product) => {
			return (
				<Col xs={12} key={product._id} md={6} className={classes.productsTwoProducts}>
					<Product
						description={product.description}
						label={product.name}
						img={product.imgUrl}
						price={product.price}
						_id={product._id}
					/>
				</Col>
			);
		});
	}

	renderMoreThenTwoProducts = () => {
		return (
			<Grid>
				<Row className={classes.productsWrapper}>
					{
						this.props.products.map((product) => {
							return (
								<Col xs={12} key={product._id} md={4} className={classes.productsThreeProducts}>
									<Product
										description={product.description}
										label={product.name}
										img={product.imgUrl}
										price={product.price}
										_id={product._id}
									/>
								</Col>
							);
						})
					}
				</Row>
			</Grid>
		);
	}


	render() {

		return (
			<div className={classes.products}>
				<h3>Каталог готовых наборов</h3>
				<Grid>
					<Row>
						{ this.props.products.length === 1 &&
							this.renderSingleProduct()
						}

						{ this.props.products.length === 2 &&
							this.renderTwoProducts()
						}

						{ this.props.products.length > 2 &&
							this.renderMoreThenTwoProducts()
						}
					</Row>
				</Grid>
			</div>
		);
	}
}

export default Products;
