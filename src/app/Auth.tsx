import HomePage from "@/pages/Home/HomePage";
import NotFoundPage from "@/pages/NotFound/NotFoundPage";
import React from "react";
import { Switch, Route } from "react-router-dom";
function AuthApp() {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route component={NotFoundPage} />
		</Switch>
	);
}

export default AuthApp;
