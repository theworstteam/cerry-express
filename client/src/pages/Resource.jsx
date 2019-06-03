import React from "react";
import { ParcelConsumer } from "../context";
import Loading from "../components/Loading";
import ResourceHistogram from "../components/resource/ResourceHistogram";

export default function Resource() {
	return (
		<div>
			<ParcelConsumer>
				{value => {
					const { loading, branch_car, branch_staff} = value;
					if (loading) {
						return <Loading name='Resource' />;
					}
					return (
						<div>
							<ResourceHistogram
								histogram={branch_car}
								name='total car per branch'
								title='Car'
							/>
							<ResourceHistogram
								histogram={branch_staff}
								name='total staff per branch'
								title='Staff'
							/>
						</div>
					);
				}}
			</ParcelConsumer>
		</div>
	);
}
