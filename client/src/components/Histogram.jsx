import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import Title from "./Title";
import { exists } from "fs";

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
	componentWillMount() {
        // const months = histogram.map(item => item.Average);
        // console.log(months);
        // var {histogram} = this.props
        // if(histogram instanceof Array){
        //     console.log("true");
        //     if(histogram.length===0){
        //         console.log("true");
        //         console.log(histogram);
        //         console.log([1,1,2]);
        //     }
        // }
    }
    
    componentDidMount(){
        // var { histogram } = this.props;
		// 		if (histogram instanceof Array) {
		// 			console.log("true");
		// 			if (histogram.length === 0) {
		// 				console.log("true");
		// 				console.log(histogram);
		// 			}
		// 		}
    }

	render() {
        var { histogram } = this.props;  
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
