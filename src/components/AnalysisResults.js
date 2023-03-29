import React, { Component } from 'react';
import Presenter from './Presenter';

class AnalysisResults extends Component {
	render() {
		return (
			<div className="ratings">
				<h3 className="ratings__heading">{this.props.heading}</h3>
				<Presenter assessor={this.props.results} />
			</div>
		);
	}
}

export default AnalysisResults;
