import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Meeting from './Components/Meeting';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/id">
					<Meeting />
				</Route>
			</Switch>
		);
	}
}

export default App;
