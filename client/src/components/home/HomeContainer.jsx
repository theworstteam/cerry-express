import React from "react";
import { ParcelConsumer } from "../../context";
import Loading from "../Loading";
import YearlySendTypeChart from "./YearlySendTypeChart";
import YearlyWeightAmount from './YearlyWeightAmount'
import YearlyLocationHistogram from './YearlyLocationHistogram'
import YearlyServiceHistogram from './YearlyServiceHistogram'
import YearlyWeightLocationHistogram from './YearlyWeightLocationHistogram'

export default function HomeContainer() {
	return (
		<ParcelConsumer>
			{value => {
				const {
					loading,
					average_parcel,
					average_weight,
					average_location,
					average_service,
					average_wl,
				} = value;

				if (loading) {
					return <Loading name='Parcel Data' />;
				}
				return (
					<div className='parcel-center'>
						<YearlySendTypeChart charts={average_parcel} />
						<YearlyLocationHistogram charts={average_location} />
						<YearlyServiceHistogram charts={average_service} />
						<YearlyWeightLocationHistogram charts={average_wl} />
						<YearlyWeightAmount charts={average_weight} /> 
					</div>
				);
			}}
		</ParcelConsumer>
	);
}
