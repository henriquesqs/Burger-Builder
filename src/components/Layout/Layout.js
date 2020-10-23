import React, { useState } from "react";
import Auxiliar from "../hoc/Auxiliar";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

import "./styles.css";

const Layout = (props) => {

	const [showSideDrawer, setShowSideDrawer] = useState(true);

	function sideDrawerCloserHandler() {
		setShowSideDrawer(false);
	}

	return (
		<Auxiliar>
			<Toolbar />
			<SideDrawer open={showSideDrawer} closed={sideDrawerCloserHandler} />
			<main className="Container">
				{props.children}
			</main>
		</Auxiliar>
	);
}

export default Layout;