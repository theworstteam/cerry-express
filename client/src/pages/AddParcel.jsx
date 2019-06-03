import React, { Component } from "react";

export default class AddParcel extends Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		const data = new FormData(event.target);
		console.log(data)

		fetch(
			"/api/delivery/parcel/<weight>/<firstname>/<lastname>/<EMS/REG>",
			{
				method: "POST",
				body: data,
			}
		);
	}

	render() {
		return (
			<div className='inputcenter'>
				<form onSubmit={this.handleSubmit}>
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
				</form>
			</div>
		);
	}
}
