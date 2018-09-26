import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

import classes from "./Headers.less";

class Headers extends Component {
	render() {
		return (
			<header className={classes.headers}>
				<div className={classes.headersBackground}>
				<Grid className={classes.headersWrapper}>
					<Row>
						<Col xs={12} md={2} className={classes.headersIconWrapper}>
							<div className={classes.headersIconContainer}>
								<i className="fab fa-instagram"></i>
								<i className="fab fa-vk"></i>
							</div>
						</Col>
						<Col xs={12} md={8} className={"text-center"}>
							<h1 className={classes.headersLabel}> label </h1>
						</Col>
						<Col xs={12} md={2} className={classes.headersContactsWrapper}>
							<div className={classes.headersContactsText}>
								<p>exoticlab@mail.ru</p>
								<p>+7(917)585-64-32</p>
							</div>
							<div className={classes.headersContactsBtn}>
								<a> Контакты </a>
							</div>
						</Col>
					</Row>

					<Row className={classes.headersRowBtn}>
						<Col xs={12} md={3} >
							<a> О КОМПАНИИ </a>
						</Col>
						<Col xs={12} md={3} >
							<a> ОТЗЫВЫ </a>
						</Col>
						<Col xs={12} md={3} >
							<a> ЦЕНЫ </a>
						</Col>
						<Col xs={12} md={3} >
							<a> ДОСТАВКА И ОПЛАТА </a>
						</Col>
					</Row>
				</Grid>

				</div>
				<div className={classes.headersSvgWrapper}>
					<Grid>
						<Row className={"text-center"}>
							<Col xs={12} md={3} className={classes.headersButtonCenter}>
								<a> ВОПРОСЫ </a>
							</Col>
						</Row>
					</Grid>

					<div className={classes.headersSvgContainer}>
						<svg className={classes.headersSvg} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none">
							<path d="M 0 0 C 40 132 60 132 100 0 Z" style={{fill: '#285A2C'}}/>
						</svg>
					</div>
				</div>
			</header>
		);
	}
}

export default Headers;
