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
					data: [],
					backgroundColor: "#F7D679",
				},
			],
		};
	}

	componentDidUpdate() {
        var { histogram } = this.props;
        const avg = histogram.map(item => item.Average);
        this.state.datasets.data = avg

	}
	render() {
		return (
			<div>
				<Title name='Histrogram' />
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
