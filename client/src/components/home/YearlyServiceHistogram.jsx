import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import Title from "../Title";

export default class YearlyServiceHistogram extends Component {
	constructor(props) {
		super(props);
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
					data: [],
					backgroundColor: "#F7D679",
				},
			],
		};
	}
	render() {
		const { histogram } = this.props;
		let Bangkok = 0;
		let ChiangRai = 0;
		let Chonburi = 0;
		let Kanchanaburi = 0;
		let Krabi = 0;
		let Nan = 0;
		let Nonthaburi = 0;
		let Tak = 0;
		let Yala = 0;
		for (let index = 0; index < histogram.length; index++) {
			Bangkok += histogram[index].Bangkok;
			ChiangRai += histogram[index].ChiangRai;
			Chonburi += histogram[index].Chonburi;
			Kanchanaburi += histogram[index].Kanchanaburi;
			Krabi += histogram[index].Krabi;
			Nan += histogram[index].Nan;
			Nonthaburi += histogram[index].Nonthaburi;
			Tak += histogram[index].Tak;
			Yala += histogram[index].Yala;
		}
		this.state.datasets[0].data = [
			Bangkok,
			ChiangRai,
			Chonburi,
			Kanchanaburi,
			Krabi,
			Nan,
			Nonthaburi,
			Tak,
			Yala,
		];

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
