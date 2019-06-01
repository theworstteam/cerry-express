import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import Title from "../Title";

export default class YearlySendTypeChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ems:"",
			reg:"",
			labels: ["EMS", "REG"],
			datasets: [
				{
					data: [7,9],
					backgroundColor: ["#F7D679", ""],
				},
			],
		};
	}
	componentDidMount(){
		const { charts } = this.props;
		for (let index = 0; index < charts.length; index++) {
			console.log(charts[index].EMS)
		}
		let result = charts.reduce((a, c) => a + c[Object.keys(c)], 0);
			console.log(this.state.ems)
	}
	render() {
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
