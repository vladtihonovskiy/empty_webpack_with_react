import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

import classes from "./UnderHeaderImage.less";

class UnderHeaderImage extends Component {
	render() {
		const backgroundImage = `url(http://s.lpmcdn.com/lpfile/c/a/8/ca8b1ad297a6f9c148052ea1c10053e8.jpeg)`;

		return (
				<div className={classes.underHeaderImage}>
					<div className={classes.underHeaderImageWrapper} style={{backgroundImage}} />

					<Grid className={classes.underHeaderImageContent}>
						<Row>
							<h2>
								ЭКЗОТИЧЕСКИЕ ФРУКТЫ ИЗ ТАИЛАНДА, ВЬЕТНАМА И БРАЗИЛИИ
							</h2>
							<h2>
								С ДОСТАВКОЙ НА ДОМ И В ОФИС
							</h2>
							<h1>
								ДОСТАВКА ЭКЗОТИЧЕСКИХ ФРУКТОВ
							</h1>
							<p>
								Закажите прямо сейчас спелые экзотические фрукты из самого Таиланда,
								с бесплатной доставкой до двери,
								в любое удобное для Вас время.
								Всегда в наличии 24 вида фруктов.
							</p>
							<a> Заказать Фрукты</a>
						</Row>
					</Grid>
				</div>

		);
	}
}

export default UnderHeaderImage;
