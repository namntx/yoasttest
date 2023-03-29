import React, { Component } from 'react';
import { helpers } from 'yoastseo';
import Rating from './Rating';

class Presenter extends Component {
	isObject(obj) {
		var type = typeof obj;
		return type === 'function' || (type === 'object' && !!obj);
	}

	getScores() {
		const scores = this.props.assessor.getValidResults().map(r => {
			if (!this.isObject(r) || !r.getIdentifier()) {
				return ``;
			}
			r.rating = helpers.scoreToRating(r.score);
			return r;
		});

		return scores.filter(a => a !== '');
	}
	addRating(item) {
		return {
			rating: item.rating,
			text: item.text,
			identifier: item.getIdentifier(),
		};
	}

	render() {
		let ratings = [];
		Object.entries(this.getScores()).forEach(([key, item]) => {
			ratings.push(this.addRating(item));
		});

		return (
			<div>
				{ratings.map(r => (
					<Rating
						key={r.identifier}
						id={r.identifier}
						rating={r.rating}
						text={r.text}
					/>
				))}
			</div>
		);
	}
}

export default Presenter;
