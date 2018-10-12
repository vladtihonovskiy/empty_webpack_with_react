import React, { Component } from 'react';

import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';

import classes from "./AdvantageOfOurCompany.less";

class AdvantageOfOurCompany extends Component {
	renderConatinerItem = () => {
		return(
			<div className={classes.advantageOfOurCompanyConatiner}>
				<Glyphicon className={classes.advantageOfOurCompanyConatinerIcon} glyph="eur" />
				<div>
					<h6 className={classes.advantageOfOurCompanyConatinerLabel}>Акции</h6>
					<p className={classes.advantageOfOurCompanyConatinerText}>
						При первом заказе для каждого подготовлен приятный фруктовый презент. И кстати, у нас постоплата.
					</p>
				</div>
			</div>
		);
	}

	render() {
		return (
			<React.Fragment>
				<div className={classes.advantageOfOurCompany}>
					<Grid>
						<Row className={classes.advantageOfOurCompanyHeader}>
							<h3 className={classes.advantageOfOurCompanyHeaderLabel}>
								Преимущества нашей компании
							</h3>
							<p className={classes.advantageOfOurCompanyHeaderText}>
								Если вы думаете, что экзотические фрукты доступны только в жарких странах,
								мы готовы развеять этот стереотип и доставить их из Тайланда, Вьетнама и Бразилии прямо на Ваш стол.
							</p>
						</Row>
						<Row className={classes.advantageOfOurCompanyWrapper}>
							<Col xs={12} md={5}>
								{ this.renderConatinerItem() }
								{ this.renderConatinerItem() }
								{ this.renderConatinerItem() }
							</Col>

							<Col xs={12} md={7}>
								<img src="http://s.lpmcdn.com/lpfile/0/e/a/0ea3cd7b99eabee62038e304e067b270.jpeg" alt=""/>
							</Col>
						</Row>

					</Grid>
				</div>
			</React.Fragment>
		);
	}
}

export default AdvantageOfOurCompany;
