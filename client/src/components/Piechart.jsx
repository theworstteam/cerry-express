import React,{Component} from 'react'
import {Pie} from 'react-chartjs-2';
import Title from './Title'

class PieChart extends Component{

	constructor(props){
		super(props)
		this.state = {
			labels: [this.props.name,this.props.name],
			datasets:[{
				data: [50,50],
				backgroundColor: ['red','blue']
			}]
		}
	}

	render(){
		return(
			<div>
				<Title name = "EMS / Register"/>	
				<Pie
					data={{
						labels:this.state.labels,
						datasets:this.state.datasets
					}}
					height = '50%'
				/>
			<br/>
			</div>
		)
	}
}

export default PieChart
