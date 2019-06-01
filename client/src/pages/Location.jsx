import React from "react";
import { ParcelConsumer } from "../context";
import Loading from "../components/Loading";
import Histogram from '../components/Loading'

export default function Location() {
	return (
		<div>
			<ParcelConsumer>
				{value => {
					const { loading, monthly_location } = value;
					if (loading) {
						return <Loading name='Parcel Data' />;
					}
					console.log(monthly_location);
					return <div>
                        <Histogram histogram="monthly_location" />
                    </div>;
				}}
			</ParcelConsumer>
		</div>
	);
}
