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
					<Title name='Average weight' />
					<h2>648</h2>
				</div>
		);
	}
}

