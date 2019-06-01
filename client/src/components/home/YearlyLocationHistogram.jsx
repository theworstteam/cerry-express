import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import Title from "../Title";

export default class YearlyLocationHistogram extends Component {
	constructor(props) {
		super(props);
		this.state = {
			labels: [
				"Bangkok",
				"ChiangMai",
				"Kanchanaburi",
				"Nonthaburi",
				"Phuket",
				"Prae",
				"Sukhothai",
				"Stun",
				"Tak",
			],
			datasets: [
				{
					label: "parcel sent per year",
					data: [2, 2, 2, 2, 2, 2, 2, 2, 1],
					backgroundColor: ["#F7D679"],
				},
			],
		};
	}
	render() {
		return (
			<div>
				<Title name='Location' />
				<Bar
					height='130%'
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

