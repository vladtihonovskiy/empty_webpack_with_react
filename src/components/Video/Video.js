import React, { Component } from 'react';
import { string } from "prop-types";

import { Grid, Row, Col } from 'react-bootstrap';

import YouTube from 'react-youtube';

import classes from "./Video.less";

class Video extends Component {
	state = {
		videoWith: 0,
	}

	componentDidMount() {
		this.setState({
			videoWith: this._videoRef.offsetWidth
		});
	}

	onReady = (event) => {
		event.target.pauseVideo();
	}

	render() {
		const { videoWith } = this.state;

		const playerWidth = videoWith;
		const playerHeight = playerWidth / 1.64;

		return (
			<div className={classes.video}>
				<Grid>
					<Row className={"text-center"}>
						<div  ref={(video)=> { this._videoRef = video }}>
							<h3 className={classes.videoLabel}>
								Видеоролик о нашем продукте
							</h3>

							<YouTube
								className={classes.videoPlayer}
								videoId="0I647GU3Jsc"
								opts={{
									width: playerWidth,
									height: playerHeight
								}}
								onReady={this.onReady}
							/>
						</div>

					</Row>
				</Grid>
			</div>
		);
	}
}

export default Video;
