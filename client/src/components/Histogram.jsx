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
					label: "Avg Weight per Month",
					data: this.props.histogram.map(item => item.Average),
					backgroundColor: "#F7D679",
				},
			],
		};
	}
	render() {
		
		return (
			<div className='center-histogram'>
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
