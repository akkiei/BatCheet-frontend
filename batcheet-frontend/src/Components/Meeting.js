import React from 'react';
import Header from './Header';
import URLGen from './UrlGen';
import Card from './Card';
import Join from './JoinMeeting';
import StartMeeting from './StartMeeting';
import Loader from './Loader';
import { Route, Link, Switch } from 'react-router-dom';

class Meeting extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loader: false
		};
	}

	showLoader = (flag) => {
		this.setState({ loader: flag });
	};

	hideLoader = (flag) => {
		this.setState({ loader: flag });
	};
	render() {
		return (
			<div>
				<Loader Loader={this.state.loader} />
				<div className="ui container ">
					<div className="ui container">
						<Card />
					</div>
				</div>
			</div>
		);
	}
}

export default Meeting;
