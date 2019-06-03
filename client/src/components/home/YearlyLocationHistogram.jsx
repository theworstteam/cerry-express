import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import Title from "../Title";

export default class YearlyLocationHistogram extends Component {
	constructor(props) {
		super(props);
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
					label: this.props.bar,
					data: [],
					backgroundColor: "#F7D679",
				},
			],
		};
	}
	render() {
		const { histogram } = this.props;
		let BKK = 0;
		let CMI = 0;
		let KBI = 0;
		let NBI = 0;
		let PKT = 0;
		let PRE = 0;
		let STI = 0;
		let STN = 0;
		let TAK = 0;
		for (let index = 0; index < histogram.length; index++) {
			BKK += histogram[index].BKK;
			CMI += histogram[index].CMI;
			KBI += histogram[index].KBI;
			NBI += histogram[index].NBI;
			PKT += histogram[index].PKT;
			PRE += histogram[index].PRE;
			STI += histogram[index].STI;
			STN += histogram[index].STN;
			TAK += histogram[index].TAK;
		}
		this.state.datasets[0].data = [BKK, CMI, KBI,NBI,PKT,PRE,STI,STN,TAK];

		return (
			<div>
				<Title name= {this.props.name}/>
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

