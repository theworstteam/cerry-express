import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import Title from "./Title";

export default class AvgWeight extends Component {
	constructor(props) {
		super(props);
		const { charts } = this.props;
	}
		render() {
			return (
				<div>
					<Title name='Avg weight per month' />
					
				</div>
		);
	}
}

