import React,{Component} from 'react'
import {Pie} from 'react-chartjs-2';
import Title from './Title'

class PieChart extends Component{
	
	constructor(props){
        super(props)
        console.log(this.props)
		this.state = {
			labels: ["EMS","REG"],
			datasets:[{
				data: [this.props.charts.EMS,this.props.charts.REG],
				backgroundColor: ['orange','']
			}]
		}
	}
	render(){
		const { Month, Year, EMS, REG } = this.props.charts;
		return(
			<div>
				<Title name = {Month}/>
				<Pie
					data={{
						labels:this.state.labels,
						datasets:this.state.datasets
					}}
				/>
			<br/>
			</div>
		)
	}
}

export default PieChart
