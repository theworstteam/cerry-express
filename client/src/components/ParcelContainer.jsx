import React from 'react'
import { ParcelConsumer } from '../context';
import PieChartList from './PieChartList'
import Histrogram from './Histogram'
import Loading from './Loading';
import Title from './Title';

export default function ParcelContainer() {
    return (
			<ParcelConsumer>
				{value => {
					const { loading, monthly_parcel } = value;
					if (loading) {
						return <Loading name="Pie Chart"/>;
					}
					return (
						<>	
							<Title name="Pie Chart"/>
							<PieChartList charts={monthly_parcel}/>
							<Histrogram/>
							
						</>
					)
				}}
			</ParcelConsumer>
		);
}
