import React from "react";
import { ParcelConsumer } from "../context";
import Loading from "../components/Loading"
import Histogram from '../components/Histogram'
import Title from '../components/Title'


export default function Service() {
	return (
		<div>
			<ParcelConsumer>
				{value => {
					const {
						loading,
						monthly_service,
					} = value;
					if (loading) {
						return <Loading name='Parcel Data' />;
					}
					console.log(monthly_service);
					return (
						<div>
							<Title name='Histogram' />
							<Histogram histogram={monthly_service} name="Average"/>
						</div>
					);
				}}
			</ParcelConsumer>
		</div>
	);
}
