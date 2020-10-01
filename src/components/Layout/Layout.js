import React from "react";
import Aux from "../hoc/Aux";

import "./styles.css";

const Layout = (props) => {
	return (
		<Aux>
			<div>Toolbar, SideDrawer, Backdrop</div>
			<main className="Container">
				{props.children}
			</main>
		</Aux>
	);
}

export default Layout;