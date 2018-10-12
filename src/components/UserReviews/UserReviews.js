import React, { Component } from 'react';

import { array } from "prop-types";

import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';

import classes from "./UserReviews.less";

class UserReviews extends Component {
	static propTypes = {
		comments: array
	}

	renderAllRewiews = (comment) => {
		const { name, data, text } = comment;

		return(
			<div className={classes.userReviewsContainer}>
				<div className={classes.userReviewsNameWrapper}>
					<p className={classes.userReviewsName}>
						{ name }
					</p>
					<p className={classes.userReviewsName}>
						05.06.2018
					</p>
				</div>

				<p className={classes.userReviewsText}>
					{ text }
				</p>
			</div>
		)
	}

	render() {
		const { comments } = this.props;

		return (
			<React.Fragment>
				<div className={classes.userReviews}>
					<Grid>
						<Row className={classes.userReviewsHeader}>
							<h3 className={classes.userReviewsHeaderLabel}>
								Отзывы наших клиентов
							</h3>
						</Row>
						<Row>
							{ comments.map(comment => {
								return this.renderAllRewiews(comment)
							}) }
						</Row>
					</Grid>
				</div>
			</React.Fragment>
		);
	}
}

export default UserReviews;
