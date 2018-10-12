import React, { Component } from 'react';
import { string } from "prop-types";
import Slider from "react-slick";


const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	arrows: false
};

import { Grid, Row, Col } from 'react-bootstrap';


import classes from "./ConditionOfDelivery.less";

class ConditionOfDelivery extends Component {
	render() {

		return (
			<div className={classes.conditionOfDelivery}>
				<Grid>
					<Row className={classes.conditionOfDeliveryWrapper}>
					<Col xs={12} md={4}>
						<Slider {...settings}>
							<div>
								<img src="http://s.lpmcdn.com/lpfile/2/0/c/20c424ff233afcd4dee9f45822e8756f/-/scale/x1/-/crop/0x0x338x451/-/resize/338/-/quality/95/file.jpeg" alt="tovar"/>
							</div>
							<div>
								<img src="http://s.lpmcdn.com/lpfile/0/1/b/01be1df1972ef7c3cad7261e5cd9e04a/-/scale/x1/-/crop/0x0x338x451/-/resize/338/-/quality/95/file.jpeg" alt="tovar"/>
							</div>
						</Slider>
					</Col>

					<Col xs={12} md={8}>
						<p className={classes.conditionOfDeliveryMainLabel}>Условия доставки и оплаты:</p>

						<div>
							<p className={classes.conditionOfDeliveryLabel}>Бесплатная доставка по Москве</p>

							<p className={classes.conditionOfDeliveryText}>
								При заказе от 4000 руб. доставка по Москве - БЕСПЛАТНО. Доставка по МО - 25 руб./км. от МКАД.
								минимальная сумма заказа - 2500 руб.
							</p>
						</div>

						<div>
							<p className={classes.conditionOfDeliveryLabel}>Бесплатная доставка по Москве</p>

							<p className={classes.conditionOfDeliveryText}>
								При заказе от 4000 руб. доставка по Москве - БЕСПЛАТНО. Доставка по МО - 25 руб./км. от МКАД.
								минимальная сумма заказа - 2500 руб.
							</p>
						</div>

						<div>
							<p className={classes.conditionOfDeliveryLabel}>Бесплатная доставка по Москве</p>

							<p className={classes.conditionOfDeliveryText}>
								При заказе от 4000 руб. доставка по Москве - БЕСПЛАТНО. Доставка по МО - 25 руб./км. от МКАД.
								минимальная сумма заказа - 2500 руб.
							</p>
						</div>

					</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default ConditionOfDelivery;
