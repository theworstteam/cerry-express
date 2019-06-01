import React from "react";
import { ParcelConsumer } from "../context";
import Loading from "../components/Loading";
import CarBranchHistogram from "../components/resource/CarBranchHistogram";
// import Histogram from '../components/resource/Histogram'

export default function Resource() {
	return (
		<div>
			<ParcelConsumer>
				{value => {
                    const { loading, branch_car, branch_staff } = value;
                    console.log(branch_car)
                    console.log(branch_staff)
					if (loading) {
						return <Loading name='Resource' />;
					}
					return (
						<div>
							<CarBranchHistogram histogram={branch_car} />
							{/* <Histogram histogram={average_service}/> */}
						</div>
					);
				}}
			</ParcelConsumer>
		</div>
	);
}
