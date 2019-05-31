import React from "react";
import PieChart from "./PieChart";
import Title from "./Title";

export default function PieChartList({ charts }) {
	return (
		<>
			<Title name='Pie Chart' />
			<div className='parcel-center'>
				{charts.map(item => {
					return <PieChart key={item.id} charts={item} />;
				})}
			</div>
		</>
	);
}
