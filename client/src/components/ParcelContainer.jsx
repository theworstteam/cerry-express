import React from "react";
import { ParcelConsumer } from "../context";
import PieChartList from "./PieChartList";
import WeightHistogram from "./WeightHistogram";
import Loading from "./Loading";
import Title from "./Title";

export default function ParcelContainer() {
	return (
		<ParcelConsumer>
			{value => {
				const { loading, monthly_parcel, monthly_weight , monthly_wl} = value;
				if (loading) {
					return <Loading name='Parcel Data' />;
				}
				console.log(monthly_wl)
				return (
					<>
						<PieChartList charts={monthly_parcel} />
						<Title name="Histogram"/>
						<WeightHistogram histogram={monthly_weight} name="Average weight per month" />
					</>
				);
			}}
		</ParcelConsumer>
	);
}
