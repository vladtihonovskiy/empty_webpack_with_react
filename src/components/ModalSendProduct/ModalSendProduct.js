/* eslint-disable react/jsx-handler-names,react/prop-types */
import React, { Component } from "react";


import { string, bool, func, array, number } from "prop-types";

import { Modal, Button, FormControl, InputGroup} from "react-bootstrap";

import { Formik } from 'formik';

import classes from "./ModalSendProduct.less";

import customToastify from "../../customFunction/customToastify";

class ModalSendProduct extends Component {
	static propTypes = {
		visibility: bool.isRequired,
		visibilityChange: func,
	};

	state = {
		submitStatus: true
	}

	sumbitBtnClick = (value)=>(event) => {

	}

	closeBtnClick = () => {
		this.props.visibilityChange();
	}

	render() {
		const { visibility } = this.props;


		return (
			<Modal className={classes.modalSendProduct} show={visibility} onHide={this.closeBtnClick}>
				<Modal.Header closeButton className={classes.modalSendProductHeader}>
					<Modal.Title>Оформление заказов</Modal.Title>
				</Modal.Header>
				<Formik
					initialValues={{ fullName: '', telephoneNumber: '', address: "", email: "" }}
					validate={ values => {
						let errors = {};
						if (!values.email) {
							errors.email = `Поле E-mail побязательно`;
						} else if (
							!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
						) {
							errors.email = 'Не верный E-mail';
						}

						if (!values.address) {
							errors.address = `Поле Адресс побязательно`;
						}

						if (!values.fullName) {
							errors.fullName = `Поле ФИО побязательно`;
						}

						if (!values.telephoneNumber) {
							errors.telephoneNumber = `Поле Телефон побязательно`;
						}else if (
							/[^0-9]+$/.test(values.telephoneNumber)
						) {
							errors.telephoneNumber = 'Не верный Телефон';
						}
						return errors;
					}}
					onSubmit={(
						values,
						{ setSubmitting, setErrors /* setValues and other goodies */ }
					) => {
						const { email, password } = values;
						alert("Work")
					}}
				>
					{({   dirty,
						  values,
						  errors,
						  status,
						  touched,
						  handleChange,
						  handleBlur,
						  handleSubmit,
						  isValid,
						  isEmpty
						  /* and other goodies */
					  }) => (
						<form onSubmit={handleSubmit} className={classes.modalSendProductForm}>

							<Modal.Body>
								<InputGroup className={classes.modalSendProductFormInputWrapper}>
									<InputGroup.Addon>ФИО</InputGroup.Addon>
									<FormControl
										type="fullName"
										name="fullName"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.fullName}
										className={(errors.fullName && touched.fullName) && classes.modalSendProductError}
									/>
								</InputGroup>

								<InputGroup className={classes.modalSendProductFormInputWrapper}>
									<InputGroup.Addon>Телефон</InputGroup.Addon>
									<FormControl
										type="telephoneNumber"
										name="telephoneNumber"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.telephoneNumber}
										className={(errors.telephoneNumber && touched.telephoneNumber) && classes.modalSendProductError}
									/>
								</InputGroup>


								<InputGroup className={classes.modalSendProductFormInputWrapper}>
									<InputGroup.Addon>Адресс</InputGroup.Addon>
									<FormControl
										type="address"
										name="address"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.address}
										className={(errors.address && touched.address) && classes.modalSendProductError}
									/>
								</InputGroup>

								<InputGroup className={classes.modalSendProductFormInputWrapper}>
									<InputGroup.Addon>E-mail</InputGroup.Addon>
									<FormControl
										type="email"
										name="email"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.email}
										className={(errors.email && touched.email) && classes.modalSendProductError}
									/>
								</InputGroup>

							</Modal.Body>
							<Modal.Footer className={classes.modalSendProductFooter}>
								<div className={classes.modalSendProductFooterLeftBtn}>
									<Button onClick={this.closeBtnClick}>⟵ Назад</Button>
								</div>
								<div className={classes.modalSendProductFooterRightBtn} >
									<Button bsStyle="primary" type={"submit"}>Оформить заказ</Button>
								</div>
							</Modal.Footer>
						</form>
					)}
				</Formik>
			</Modal>
		);
	}
}


export default ModalSendProduct;

