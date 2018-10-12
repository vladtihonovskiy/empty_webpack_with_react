import React, { Component } from 'react';

import { func } from "prop-types";

import customToastify from '../../customFunction/customToastify';

import { Grid, Row, Col, Glyphicon, InputGroup, FormControl, Button } from 'react-bootstrap';

import classes from "./UserReviewsForm.less";
import {postRequest} from "../../api";

class UserReviewsForm extends Component {
	static propTypes = {
		saveComment: func
	}

	state = {
		name: "",
		textarea: ""
	}

	onNameInput = (event) => {
		this.setState({
			name: event.target.value
		})
	}

	onTextAreaInput = (event) => {
		this.setState({
			textarea: event.target.value
		})
	}

	onSubmitClick = async() => {
		const { name, textarea } = this.state;

		if (name === "" || textarea === "") {
			customToastify("Все поля должны быть заполненны", "error");
		} else {
			this.props.saveComment(name, textarea);
		}
	}

	render() {
		return (
			<React.Fragment>
				<div className={classes.userReviewsForm}>
					<Grid>
						<Row className={"text-center"}>
							<div  className={classes.userReviewsFormWrapper}>
								<p className={classes.userReviewsFormWrapperText}>Оставтье свой Коментарии</p>
								<InputGroup onChange={this.onNameInput} className={classes.userReviewsFormWrapperInput} >
									<InputGroup.Addon>Name</InputGroup.Addon>
									<FormControl type="text" />
								</InputGroup>
								<textarea onChange={this.onTextAreaInput} maxLength={500} name="description" className={classes.userReviewsFormWrapperTextarea} rows="20"></textarea>
								<a className={classes.userReviewsFormButton} onClick={this.onSubmitClick}>Отправить</a>

							</div>
						</Row>
					</Grid>
				</div>
			</React.Fragment>
		);
	}
}

export default UserReviewsForm;
