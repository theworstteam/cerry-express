import React, { Component } from "react";
import Title from "../components/Title";

export default class AddParcel extends Component {
	state = {
		formControl: {
			firstName: "",
			lastName: "",
			weight: "",
			sendType: "",
		},
	};
	handleFirstName(e) {
		let value = e.target.value;
		this.setState(prevState => ({
			formControl: {
				...prevState.formControl,
				firstName: value,
			},
		}));
	}
	handleLastName(e) {
		let value = e.target.value;
		this.setState(prevState => ({
			formControl: {
				...prevState.formControl,
				lastName: value,
			},
		}));
	}
	handleSendType(e) {
		let value = e.target.value;
		this.setState(prevState => ({
			formControl: {
				...prevState.formControl,
				sendType: value,
			},
		}));
	}
	handleWeight(e) {
		let value = e.target.value;
		this.setState(prevState => ({
			formControl: {
				...prevState.formControl,
				weight: value,
			},
		}));
	}

	handleSubmit(event) {
		const { firstName, lastName, sendType, weight } = this.state.formControl;
		console.log(firstName);
		console.log(lastName);
		console.log(sendType);
		console.log(weight);
		const rand = Math.floor(Math.random() * Math.floor(15));
		var date = new Date().getDate();
		var month = new Date().getMonth() + 1;

		fetch(
			"http://localhost:5000/api/delivery/parcel/" +
				weight +
				"/" +
				firstName +
				"/" +
				lastName +
				"/" +
				sendType,
			{
				method: "POST",
			}
		);
		fetch(
			"http://localhost:5000/transaction-date/" +
				0 +
				date +
				month +
				19 +
				"/" +
				0 +
				date +
				"/" +
				month +
				"/" +
				19 +
				"/" +
				rand,
			{
				method: "POST",
			}
		);
		fetch(
			"http://localhost:5000/transaction-date/" ,
			{
				method: "POST",
			}
		);

		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<Title name='add parcel' />
				<div className='inputcenter'>
					<br />
					<h4>
						First Name:
						<input
							type='text'
							name='firstName'
							onChange={this.handleFirstName.bind(this)}
						/>
					</h4>
					<br />
					<h4>
						Last Name:
						<input
							type='text'
							name='lastName'
							onChange={this.handleLastName.bind(this)}
						/>
					</h4>
					<br />
					<h4>
						Sent Type:
						<input
							type='text'
							name='sentType'
							onChange={this.handleSendType.bind(this)}
						/>
					</h4>
					<br />
					<h4>
						Weight:
						<input
							type='number'
							min='0'
							max='1200'
							name='weight'
							onChange={this.handleWeight.bind(this)}
						/>
					</h4>
					<br />
					<input type='submit' value='Submit' className='btn-primary' />
				</div>
			</form>
		);
	}
}
