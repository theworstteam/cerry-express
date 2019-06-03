import React from "react";
import MonthlyServiceHistogram from './MonthlyServiceHistogram'

export default function ServiceList({ histogram }) {
	return (
		<>
			{histogram.map(item => {
				return <MonthlyServiceHistogram key={item.id} histogram={item} name = "Services per month"/>;
			})}
		</>
	);
}
