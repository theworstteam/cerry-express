import React from 'react'
import PieChart from './PieChart'


export default function PieChartList({charts}) {
    return (
				<div className='parcel-center'>
					{charts.map(item => {
						return <PieChart key={item.id} charts={item} />;
                    })}
				</div>
		);
}
