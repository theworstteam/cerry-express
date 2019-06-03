import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import Title from '../Title'

export default class MonthlyServiceHistogram extends Component {
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
			Tak,
			Yala,
		} = this.props.histogram;
		this.state = {
			labels: [
				"Bangkok",
				"ChiangRai",
				"Chonburi",
				"Kanchanaburi",
				"Krabi",
				"Nan",
				"Nonthaburi",
				"Tak",
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
						Tak,
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

