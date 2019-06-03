import React from "react";
import { ParcelConsumer } from "../context";
import LocationList from '../components/location/LocationList'
import Loading from '../components/Loading'

export default function Location() {
	return (
		<div>
			<ParcelConsumer>
				{value => {
					const { loading, average_location } = value;
					if (loading) {
						return <Loading name='Location' />;
					}
					return <div>
                        <LocationList histogram={average_location}/>
                    </div>
				}}
			</ParcelConsumer>
		</div>
	);
}
