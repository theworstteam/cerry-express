import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
// import logo from "../images/logo.png";
import { IoMdCube, IoIosHome } from "react-icons/io";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
	state = {
		isOpen: false,
	};
	handleToggle = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		return (
			<nav className='navbar'>
				<div className='nav-center'>
					<div className='nav-header'>
						<Link to='/'>
							Cerry Express
						</Link>
						<button
							type='button'
							className='nav-btn'
							onClick={this.handleToggle}>
							<FaAlignRight className='nav-icon' />
						</button>
					</div>
					<ul
						className={
							this.state.isOpen ? "nav-links show-nav" : "nav-links"
						}>
						<li>
							<Link to='/'>
								<IoIosHome className='nav-icon' />
								Home
							</Link>
						</li>
						<li>
							<Link to='/parcels'>
								<IoMdCube className='nav-icon' />
								Parcel
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
