import React from 'react'
import PieChart from './PieChart'


export default function PieChartList({charts}) {
	console.log(Object.keys(charts).length)
    if(charts === 0){
        return (
			<div className='empty-search'>
				<h3>
					Unfortunately no pie chart left
				</h3>
			</div>
		    );
    }
    return (
			<section className='roomslist'>
				<div className='roomslist-center'>
					{charts.map(item => {
						return <PieChart key={item.id} charts={item} />;
                    })}
				</div>
			</section>
		);
}
