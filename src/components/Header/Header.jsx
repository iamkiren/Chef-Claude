import React from "react";
import "./Header.css";
import chefLogo from "../../images/chef-claude-icon.png";

const Header = () => {
	return (
		<header>
			<img src={chefLogo} alt="logo" />
			<h1>Chef Claude</h1>
		</header>
	);
};

export default Header;
