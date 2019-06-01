import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import Title from "../Title";

export default class YearlyServiceHistogram extends Component {
	constructor(props) {
		super(props);
		const { charts } = this.props;
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
					label: "services per branch",
					data: [3, 4, 5, 6, 5, 3, 8, 1, 1],
					backgroundColor: ["#F7D679"],
				},
			],
		};
	}
	render() {
		return (
			<div>
				<Title name='Service' />
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
