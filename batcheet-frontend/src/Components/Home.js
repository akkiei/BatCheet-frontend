import React from 'react';
import Header from './Header';
import URLGen from './UrlGen';
import Card from './Card';
import Join from './JoinMeeting';
import StartMeeting from './StartMeeting';
import Loader from './Loader';
import { Route, Link, Switch } from 'react-router-dom';
import StartJoin from './StartORJoin';

class Home extends React.Component {
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
					<div className="ui raised very padded text  segment">
						<Header />
					</div>
					<div className="ui raised very padded text segment  ">
                        <StartJoin showLoader={this.showLoader} hideLoader={this.hideLoader}/>
						{/* <StartMeeting showLoader={this.showLoader} hideLoader={this.hideLoader} />
						<URLGen />  onclick of join button it should redirect to different url with this
                        <Join showLoader={this.showLoader} hideLoader={this.hideLoader} /> */}
                        {/* <div className="ui raised very padded text  segment"><Card/></div> */}
					</div>
					
				</div>
			</div>
		);
	}
}

export default Home;
