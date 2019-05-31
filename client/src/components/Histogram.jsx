import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import Title from "./Title";

class Histogram extends Component {
	constructor(props) {
		super(props);

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
					label: "weight",
					data: [40, 60, 20, 10, 5, 15, 30, 35, 60, 10, 25, 30],
					backgroundColor: "#F7D679",
				},
			],
		};
	}

	render() {
		return (
			<div className="center-histogram">
				<Title name = "Histrogram"/>
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

export default Histogram;
