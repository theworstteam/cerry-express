import React from "react";
import { ParcelConsumer } from "../context";
import Loading from "../components/Loading"
import ServiceList from "../components/service/ServiceList"


export default function Service() {
	return (
		<div>
			<ParcelConsumer>
				{value => {
					const {
						loading,
						average_service,
					} = value;
					if (loading) {
						return <Loading name='Service' />;
					}
					return (
						<div>
							<ServiceList histogram={average_service}/>
						</div>
					);
				}}
			</ParcelConsumer>
		</div>
	);
}
