import React from "react";
import { ParcelConsumer } from "../context";
import PieChartList from "./PieChartList";
import Histrogram from "./Histogram";
import Loading from "./Loading";
import SummaryChart from "./SummaryChart";

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
                console.log(monthly_location)
                console.log(monthly_service)
                console.log(monthly_wl)
				return <>
                    <SummaryChart charts={monthly_parcel}/>
                    <SummaryChart charts={monthly_weight}/>
                    <SummaryChart charts={monthly_location}/>
                    <SummaryChart charts={monthly_service}/>
                    <SummaryChart charts={monthly_wl}/>
                    </>;
			}}
		</ParcelConsumer>
	);
}
