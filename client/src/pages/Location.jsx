import React from "react";
import { ParcelConsumer } from "../context";
import LocationList from '../components/location/LocationList'

export default function Location() {
	return (
		<div>
			<ParcelConsumer>
				{value => {
                    const { average_location } = value;		
					return <div>
                        <LocationList histogram={average_location}/>
                    </div>
				}}
			</ParcelConsumer>
		</div>
	);
}
