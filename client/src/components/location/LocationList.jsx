import React from "react";
import MonthlyLocationHistogram from "./MonthlyLocationHistogram";

export default function LocationList({ histogram }) {
    console.log(histogram)
	return (
		<>
			{histogram.map(item => {
                console.log(item)
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
