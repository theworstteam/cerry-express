import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/logo.png";
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
							<img src={logo} />
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
							<Link to='/parcel'>
								<IoMdCube className='nav-icon' />
								Parcel
							</Link>
						</li>
						<li>
							<Link to='/service'>
								<IoMdCube className='nav-icon' />
								Service
							</Link>
						</li>
						<li>
							<Link to='/location'>
								<IoMdCube className='nav-icon' />
								Location
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
