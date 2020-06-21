import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<div>
				<h2 className="ui center aligned icon header">
					<i className="circular users icon" />
					Welcome To BaatCheet !
				</h2>
				<div className="ui center aligned sub header ">
					<p>This service is free to use<br/>For Now And Always </p>
				</div>
			</div>
		);
	}
}

export default Header;
