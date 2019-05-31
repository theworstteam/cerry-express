import React from "react";
import { ParcelConsumer } from "../context";
import PieChartList from "./PieChartList";
import Histrogram from "./Histogram";
import Loading from "./Loading";
import Title from "./Title";

export default function ParcelContainer() {
	return (
		<ParcelConsumer>
			{value => {
				const { loading, monthly_parcel, monthly_weight } = value;
				if (loading) {
					return <Loading name='Parcel Data' />;
				}
				return (
					<>
						<PieChartList charts={monthly_parcel} />
						<Histrogram histogram={monthly_weight} />
					</>
				);
			}}
		</ParcelConsumer>
	);
}
