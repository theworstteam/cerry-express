import React, { Component } from "react";
import Title from "../components/Title";
export default class AddParcel extends Component {
	state = {
		formControl: {
			firstName: "",
			lastName: "",
			weight: "",
			sendType: "",
			location: "",
		},
	};
	componentDidMount() {
		this.clearForm();
	}

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
	handleLocation(e) {
		let value = e.target.value;
		this.setState(prevState => ({
			formControl: {
				...prevState.formControl,
				location: value,
			},
		}));
	}
	handleSubmit(event) {
		const {
			firstName,
			lastName,
			sendType,
			weight,
			location,
		} = this.state.formControl;
		var months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];
		var duration = Math.floor(Math.random() * 15) + 1;
		function monthNumToName(monthnum) {
			return months[monthnum - 1] || "";
		}
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
			"http://localhost:5000/api/delivery/transaction-date/" +
				0 +
				date +
				0 +
				month +
				19 +
				"/" +
				0 +
				date +
				"/" +
				monthNumToName(month) +
				"/" +
				19 +
				"/" +
				duration,
			{
				method: "POST",
			}
		);
		fetch(
			"http://localhost:5000/api/delivery/transaction/" +
				(Math.floor(Math.random() * 8) + 100) +
				"/" +
				location,
			{
				method: "POST",
			}
		);

		alert("You have successfull added data");
		this.clearForm();
		event.preventDefault();
	}
	clearForm = () => {
		document.getElementById("addForm").reset();
		this.setState({
			first_name: "",
			lastName: "",
			weight: "",
			sendType: "",
			location: "",
		});
	};

	render() {
		return (
			<form id='addForm' onSubmit={this.handleSubmit.bind(this)}>
				<Title name='add parcel' />
				<div className='inputcenter'>
					<br />
					<h4>
						First Name:
						<input
							type='text'
							name='firstName'
							onChange={this.handleFirstName.bind(this)}
							placeholder='Input your first name'
						/>
					</h4>
					<br />
					<h4>
						Last Name:
						<input
							type='text'
							name='lastName'
							onChange={this.handleLastName.bind(this)}
							placeholder='Input your last name'
						/>
					</h4>
					<br />
					<h4>
						Sent Type:
						<input
							type='text'
							name='sentType'
							onChange={this.handleSendType.bind(this)}
							placeholder='EMS or REG only'
						/>
					</h4>
					<br />
					<h4>
						Location:
						<input
							type='text'
							name='sentType'
							onChange={this.handleLocation.bind(this)}
							placeholder='Example BKK, NAN'
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
