import React, { useMemo } from "react";
import "@/assets/css/main.css";
import { TokenService } from "@/utils/token";
import PublicApp from "./Public";
import AuthApp from "./Auth";

function App() {
	// const isTokenExist = useMemo(() => Boolean(TokenService.getToken()), []);

	// if (!isTokenExist) {
	//   return <PublicApp />;
	// }

	return <AuthApp />;
}

export default App;
