import React from "react";
import { ParcelConsumer } from "../../context";
import ParcelList from "./ParcelList";
import WeightHistogram from "./WeightHistogram";
import Loading from "../Loading";
import Title from "../Title";

export default function ParcelContainer() {
	return (
		<ParcelConsumer>
			{value => {
				const {
					loading,
					average_parcel,
					average_weight,
				} = value;
				if (loading) {
					return <Loading name='Parcel Data' />;
				}
				return (
					<>
						<ParcelList charts={average_parcel} />
						<Title name='Histogram' />
						<WeightHistogram
							histogram={average_weight}
							name='average weight per month'
						/>
					</>
				);
			}}
		</ParcelConsumer>
	);
}
