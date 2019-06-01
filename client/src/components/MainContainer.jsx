import React from "react";
import { ParcelConsumer } from "../context";
import Loading from "./Loading";
import SendTypeChart from "./SendTypeChart";
import AvgWeightChart from './AvgWeightChart'
import LocationChart from './LocationChart'
import ServiceChart from './ServiceChart'

export default function MainContainer() {
	return (
		<ParcelConsumer>
			{value => {
				const {
                    loading,
                    monthly_parcel,
                    monthly_weight,
					monthly_location,
					monthly_service,
					monthly_wl,
				} = value;

				if (loading) {
					return <Loading name='Parcel Data' />;
				}
				console.log(monthly_weight)
                console.log(monthly_location)
                console.log(monthly_service)
                console.log(monthly_wl)
				return (
				<div className="parcel-center">
                    <SendTypeChart charts={monthly_parcel}/>
                    <AvgWeightChart charts={monthly_weight}/>
					<LocationChart charts={monthly_location}/>
                    <ServiceChart charts={monthly_service}/>
                    {/* <TotalParcelChart charts={monthly_wl}/> */}
				</div>
				)
			}}
		</ParcelConsumer>
	);
}
