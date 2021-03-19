import { useMediaQuery } from "@chakra-ui/react";
import React, { Suspense } from "react";
import { Route, Switch, useHistory } from "react-router";

function PublicApp() {
	return <Switch>{/* <Route exact path="/" component={SignIn} /> */}</Switch>;
}

export default PublicApp;
