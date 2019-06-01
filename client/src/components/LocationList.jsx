import React from "react";
import LocationHistogram from "../components/LocationHistogram";

export default function LocationList({ histogram }) {
    console.log(histogram)
	return (
		<>
			{histogram.map(item => {
                console.log(item)
				return (
					<LocationHistogram
						key={item.id}
						histogram={item}
						name='Location sent per month'
					/>
				);
			})}
		</>
	);
}
