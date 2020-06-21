import React from 'react';
import StartMeeting from './StartMeeting';
import JoinMeeting from './JoinMeeting';
export default function StartORJoin(props) {
	return (
		<div className="ui placeholder segment">
			<div className="ui two column stackable center aligned grid">
				<div className="ui vertical divider">Or</div>
				<div className="middle aligned row">
					<div className="column">
						<div className="ui icon header">
							<i className="paper plane icon" />
						</div>
						<StartMeeting showLoader={props.showLoader} hideLoader={props.hideLoader} />
					</div>
					<div className="column">
						<JoinMeeting showLoader={props.showLoader} hideLoader={props.hideLoader} />
					</div>
				</div>
			</div>
		</div>
	);
}
