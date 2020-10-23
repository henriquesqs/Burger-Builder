import React, { useState } from "react";
import Auxiliar from "../hoc/Auxiliar";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

import "./styles.css";

const Layout = (props) => {

	// Hook and its function to control whether we show the SideDrawer or not
	const [showSideDrawer, setShowSideDrawer] = useState(false);

	function sideDrawerCloserHandler() {
		setShowSideDrawer(false);
	}

	function sideDrawerToggleHandler() {
		// Setting the new State based on the old State in a safe way
		setShowSideDrawer(showSideDrawer => !showSideDrawer);
	}

	return (
		<Auxiliar>
			<Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
			<SideDrawer
				open={showSideDrawer}
				closed={sideDrawerCloserHandler}

			/>
			<main className="Container">
				{props.children}
			</main>
		</Auxiliar>
	);
}

export default Layout;