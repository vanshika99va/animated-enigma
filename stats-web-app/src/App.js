import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import TwitchScreen from "./TwitchScreen";
import FootballScreen from "./FootballScreen";
import HomeScreen from "./HomeScreen";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={HomeScreen} />
					<Route path="/twitch" component={TwitchScreen} />
					<Route path="/football" component={FootballScreen} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
