import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import Title from "./Title";

export default class WeightLocationChart extends Component {
	constructor(props) {
		super(props);
		const { charts } = this.props;
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
					data: [3, 4, 5, 6, 5, 3, 8, 1, 1],
					backgroundColor: ["#F7D679", "", "", "", "", "", "", "", ""],
				},
			],
		};
	}
	render() {
		return (
			<div>
				<Title name='WeightLocation' />
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
