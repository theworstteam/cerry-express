import React from "react";
import { ParcelConsumer } from "../context";
import LocationList from '../components/LocationList'

export default function Location() {
	return (
		<div>
			<ParcelConsumer>
				{value => {
                    const { monthly_location } = value;		
					return <div>
                        <LocationList histogram={monthly_location}/>
                    </div>;
				}}
			</ParcelConsumer>
		</div>
	);
}
