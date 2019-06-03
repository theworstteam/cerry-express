import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

export default class ParcelChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			labels: ["EMS", "REGISTER"],
			datasets: [
				{
					data: [this.props.charts.EMS, this.props.charts.REG],
					backgroundColor: ["#F7D679", ""],
				},
			],
		};
	}
	render() {
		const { Month } = this.props.charts;
		return (
			<div>
				<div className='section-title'>
					<h5>{Month}</h5>
				</div>
				<Pie
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

