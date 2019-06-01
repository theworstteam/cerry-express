import React from "react";
import ParcelChart from "./ParcelChart";
import Title from "../Title";

export default function PieChartList({ charts }) {
	return (
		<>
			<Title name='Pie Chart' />
			<div className='parcel-center'>
				{charts.map(item => {
					return <ParcelChart key={item.id} charts={item} />;
				})}
			</div>
		</>
	);
}
