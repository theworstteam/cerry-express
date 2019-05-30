import React from 'react'
import { ParcelConsumer } from '../context';
import PieChart from './PieChart'
import Title from './Title'

export default function PieChartList() {
    return (
			<ParcelConsumer>
				{
                   value => {
					   return(
						   <PieChart/>
					   )
				   } 
                }
			</ParcelConsumer>
		);
}
