import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import Title from '../components/Title'

class ServiceHistogram extends Component {
	constructor(props) {
		super(props);
		const {
			Bangkok,
			ChiangRai,
			Chonburi,
			Kanchanaburi,
			Krabi,
			Nan,
			Nonthaburi,
			Taka,
			Yala,
		} = this.props.histogram;
		console.log(Bangkok);
		this.state = {
			labels: [
				"Bangkok",
				"ChiangRai",
				"Chonburi",
				"Kanchanaburi",
				"Krabi",
				"Nan",
				"Nonthaburi",
				"Taka",
				"Yala",
			],

			datasets: [
				{
					label: this.props.name,
					data: [
						Bangkok,
						ChiangRai,
						Chonburi,
						Kanchanaburi,
						Krabi,
						Nan,
						Nonthaburi,
						Taka,
						Yala,
					],
					backgroundColor: "#F7D679",
				},
			],
		};
	}
	render() {
		return (
			<div className='center-histogram'>
				<Title name={this.props.histogram.Month} />
				<Bar
					height='50%'
					data={{
						labels: this.state.labels,
						datasets: this.state.datasets,
					}}
				/>
				<br />
			</div>
		);
	}
}

export default ServiceHistogram;
