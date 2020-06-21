import React from 'react';

class JoinMeeting extends React.Component {
	render() {
		return (
			<div>
				<div className="ui action input ">
					<input type="text" placeholder="Enter URL to join"  />
					<button className="ui teal right  icon button">
						<i className="copy icon" />
					</button>
				</div>
			</div>
		);
	}
}

export default JoinMeeting;
