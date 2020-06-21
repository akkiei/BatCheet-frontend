import React from 'react';
import Loader from './Loader';
import { Route, Link, Switch ,Redirect} from 'react-router-dom';

class StartMeeting extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            loader: false,
            nav : '/'
		};
	}
	startVideoCall = () => {
		this.setState({
			loader: true
		});
		this.showLoader();
	};

	showLoader = () => {
        this.props.showLoader(true); 
        this.setState({nav:'id'});
	};
	render() {
		return (
			<button className="ui animated fade button" onClick={this.startVideoCall}>
				<div className="visible content">Start a meeting</div>
				<div className="hidden content">
					<i className="video icon" />
				</div>
                <Redirect push to={ this.state.nav} />
			</button>
		);
	}
}

export default StartMeeting;
