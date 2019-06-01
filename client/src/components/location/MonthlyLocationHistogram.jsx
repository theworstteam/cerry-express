import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import Title from "../Title";

export default class LocationHistogram extends Component {
	constructor(props) {
		super(props);
		const {
			BKK,
			CMI,
            KBI,
            NBI,
            PKT,
            PRE,
            STI,
            STN,
            TAK,
		} = this.props.histogram;
		this.state = {
			labels: [
				"BKK",
				"CMI",
				"KBI",
				"NBI",
				"PKT",
				"PRE",
				"STI",
				"STN",
				"TAK",
			],

			datasets: [
				{
					label: this.props.name,
					data: [BKK, CMI, KBI, NBI, PKT, PRE, STI, STN, TAK],
					backgroundColor: "#F7D679",
				},
			],
		};
	}
	render() {
		return (
			<div className='center-histogram'>
                <Title name={this.props.histogram.Month}/>
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
