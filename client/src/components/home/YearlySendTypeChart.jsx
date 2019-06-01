import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import Title from "../Title";

export default class YearlySendTypeChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			labels: ["EMS", "REG"],
			datasets: [
				{
					data: [],
					backgroundColor: ["#F7D679", ""],
				},
			],
		};
	}
	render() {
		const { charts } = this.props;
		let sumEms = 0;
		let sumReg = 0;
		for (let index = 0; index < charts.length; index++) {
			sumEms += charts[index].EMS;
			sumReg += charts[index].REG;
		}
		this.state.datasets[0].data = [sumEms,sumReg]

		return (
			<div>
				<Title name='Send Type' />
				<Pie
					height='120%'
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
