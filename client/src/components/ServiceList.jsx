import React from "react";
import ServiceHistogram from './ServiceHistogram'

export default function ServiceList({ histogram }) {
	return (
		<>
			{histogram.map(item => {
				return <ServiceHistogram key={item.id} histogram={item} name = "Services per month"/>;
			})}
		</>
	);
}
