import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import Title from "./Title";

class PieChart extends Component {
	constructor(props) {
		super(props);
		const {charts} = this.props;
		this.state = {
			labels: [
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
			],
			datasets: [
				{
					data: charts.map(item => item.EMS + item.REG),
					backgroundColor: [
						"#F7D679",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
					],
				},
			],
		};
	}
	render() {
		return (
			<div>
				<Title name="Total parcels per month"/>
				<Pie
					height='75%'
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

export default PieChart;
