import React from 'react';

class Card extends React.Component {
	render() {
		return (
			<div className="ui two column grid">
				<div className="column">
					<div className="ui  card">
						<div className="ui medium image">
							<img src="Me.jpg" />
						</div>
						<div className="content">
							<a className="header">Akashdeep</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;
