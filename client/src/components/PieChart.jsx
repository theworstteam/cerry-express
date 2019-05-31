import React, { Component } from "react";
// import { Pie } from "react-chartjs-2";

class PieChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			labels: ["EMS", "REG"],
			datasets: [
				{
					data: [40, 60],
					backgroundColor: ["red", "blue"],
				},
			],
		};
	}

	render() {
		return (
			<div>
				<h3>Amount of parcel type</h3>
				{/* <Pie
					data={{
						labels: this.state.labels,
						datasets: this.state.datasets,
					}}
					height='50%'
				/> */}
				<br />
			</div>
		);
	}
}

export default PieChart;
