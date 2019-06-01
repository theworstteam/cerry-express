import React from "react";
import { ParcelConsumer } from "../context";
import Loading from "../components/Loading"
import ServiceList from "../components/ServiceList"


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
							<ServiceList histogram={monthly_service}/>
						</div>
					);
				}}
			</ParcelConsumer>
		</div>
	);
}
