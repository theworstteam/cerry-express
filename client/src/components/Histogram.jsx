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
					data: [1,1],
					backgroundColor: "#F7D679",
				},
			],
		};
	}
    
    componentDidMount(){
        var { histogram } = this.props;
        console.log(histogram)

        // console.log(histogram.length)
        // for (let index = 0; index < histogram.length; index++) {
        //     console.log(histogram[index])
        // }
    }

	render() {
        // var { histogram } = this.props;  

		return (
			<div className='center-histogram'>
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
