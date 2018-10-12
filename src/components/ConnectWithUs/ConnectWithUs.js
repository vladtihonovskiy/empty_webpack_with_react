import React, { Component } from 'react';
import { func } from 'prop-types';
import { string } from "prop-types";
import { Grid, Row } from 'react-bootstrap';


import classes from "./ConnectWithUs.less";

class ConnectWithUs extends Component {
	static propTypes = {
		setRef:func
	}

	componentDidMount() {
		this.props.setRef(this._contacts);
	}

	render() {
		return (
			<div ref={node => { this._contacts = node}} className={classes.connectWithUs}>
				<Grid>
					<Row className={"text-center"}>
						<p className={classes.connectWithUsLabel}>Свяжитесь с нами</p>
						<img className={classes.connectWithUsImage}
							 src="http://s.lpmcdn.com/lpfile/5/2/5/5256ed6e418b5ed8428da0e795b93e72/-/scale/x1/-/crop/0x0x1000x1001/-/resize/223/-/quality/85/file.jpeg"
							 alt="Имя"
						/>
						<p className={classes.connectWithUsName}>Ирина</p>
						<p className={classes.connectWithUsText}>Главный менеджер проекта "Exotic Lab"
							+7(917)585-64-32 exoticlab@mail.ru </p>
						<p className={classes.connectWithUsText}>г. Москва</p>
						<i className="fab fa-instagram"></i>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default ConnectWithUs;
