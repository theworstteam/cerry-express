import React from "react";
import MonthlyLocationHistogram from "./MonthlyLocationHistogram";

export default function LocationList({ histogram }) {
	return (
		<>
			{histogram.map(item => {
				return (
					<MonthlyLocationHistogram
						key={item.id}
						histogram={item}
						name='Location sent per month'
					/>
				);
			})}
		</>
	);
}
