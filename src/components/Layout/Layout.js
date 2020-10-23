import React from "react";
import Auxiliar from "../hoc/Auxiliar";
import Toolbar from "../Navigation/Toolbar/Toolbar";

import "./styles.css";

const Layout = (props) => {
	return (
		<Auxiliar>
			<Toolbar />
			<main className="Container">
				{props.children}
			</main>
		</Auxiliar>
	);
}

export default Layout;