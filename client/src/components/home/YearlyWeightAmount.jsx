import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import Title from "../Title";

export default class YearlyWeightAmount extends Component {
	
	render() {
		const { data } = this.props;
		let avg = data.map(item => item.Average)
		let sum = avg.reduce((sum, number) => {
			return sum + number;
		}, 0);
		return (
			<div>
				<Title name='Average weight' />
				<h2 className='set-font'>
					{Math.round(sum/12)} g
				</h2>
			</div>
		);
	}
}
