import React, { Component } from "react";

export default class Input extends Component{

	render() {
		return (
			<div className='inputcenter'>
				<br />
				<h4>
					First Name:
					<input type='text' name='firstName' />
				</h4>
				<br />
				<h4>
					Last Name:
					<input type='text' name='lastName' />
				</h4>
				<br />
				<h4>
					Sent Type:
					<input type='text' name='sentType' />
				</h4>
				<br />
				<h4>
					Weight:
					<input type='number' min='0' max='1200' name='weight' />
				</h4>
				<br />
				<input type='submit' value='Submit' />
			</div>
		);
	}

}
