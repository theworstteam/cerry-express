import React from 'react'
import PieChart from './PieChart'


export default function PieChartList({charts}) {
    if(charts.length === 0){
        return (
			<div className='empty-search'>
				<h3>
					unfortunately no pie chart left
				</h3>
			</div>
		    );
    }
    return (
			<section className='roomslist'>
				<div className='roomslist-center'>
				<PieChart charts={charts} />
				</div>
			</section>
		);
}
