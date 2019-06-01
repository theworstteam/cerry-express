import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import Title from "./Title";

export default class Service extends Component {
	constructor(props) {
		super(props);
		const { charts } = this.props;
		this.state = {
			labels: ["BKK", "CMI", "KBI", "NBI", "PKT", "PRE", "STI", "STN", "TAK"],
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
				<Title name='Avg weight per month' />
				<Pie
					height='90%'
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
