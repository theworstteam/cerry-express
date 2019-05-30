import React from 'react'
import { ParcelConsumer } from '../context';
import PieChartList from './Piechart'
import Title from './Title'
import Loading from './Loading';

export default function PieChartContainer() {
    return (
			<ParcelConsumer>
				{value => {
					const {loading,monthly_data} = value
					if (loading) {
						return <Loading name="Pie Chart"/>;
					}
					return <PieChartList />;
				}}
			</ParcelConsumer>
		);
}
