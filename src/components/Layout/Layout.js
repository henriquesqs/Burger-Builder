import React from "react";
import Auxiliar from "../hoc/Auxiliar";

import "./styles.css";

const Layout = (props) => {
	return (
		<Auxiliar>
			<div>Toolbar, SideDrawer, Backdrop</div>
			<main className="Container">
				{props.children}
			</main>
		</Auxiliar>
	);
}

export default Layout;