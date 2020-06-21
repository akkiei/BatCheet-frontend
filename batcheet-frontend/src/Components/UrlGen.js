import React from 'react';

class UrlGen extends React.Component {
	render() {
		return (
			<div className="ui action input">
				<input type="text" value="add dynamically gen URL" />
				<button className="ui teal right labeled icon button">
					<i className="copy icon" />
					Copy
				</button>
			</div>
		);
	}
}

export default UrlGen;
