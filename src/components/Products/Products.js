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
					description={product.description}
					label={product.name}
					img={product.imgUrl}
					price={product.price}
				/>
			);
		});
	}

	renderTwoProducts = () => {
		return this.props.products.map((product) => {
			return (
				<Col xs={12} md={6} className={classes.productsTwoProducts}>
					<Product
						description={product.description}
						label={product.name}
						img={product.imgUrl}
						price={product.price}
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
								<Col xs={12} md={4} className={classes.productsThreeProducts}>
									<Product
										description={product.description}
										label={product.name}
										img={product.imgUrl}
										price={product.price}
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
