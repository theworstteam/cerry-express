import React,{Component} from 'react'
import {Bar} from 'react-chartjs-2';




class Histogram extends Component{

	constructor(props){
        super(props)
        
        
		this.state = {
            labels: ['January','February','March','April','May','June','July','August','September','October','November','December'],
			datasets:[{
                label: 'average weight send to each location',
                data: [40,60,20,10,5,15,30,35,60,10,25,30],
                backgroundColor: 'red',
                
			}]
        }
    
        
	}

	render(){

		return(
			<div className="roomslist-center">
				<Bar
                    width={50}
                    height={300}
                    options={{ maintainAspectRatio: false }}
                    padding-top= '50%'
					data={{
						labels:this.state.labels,
                        datasets:this.state.datasets,
                    
                    }}

                    
                
				/>
			<br/>
			</div>
            
		)
	}
}

export default Histogram