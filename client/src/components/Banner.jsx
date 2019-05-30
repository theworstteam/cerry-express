import React, { Component } from "react";
import {ParcelContext} from '../context';
import { useContext } from "react";

export default class Banner extends Component {
    	static contextType = ParcelContext
    	render(){
	let {loading} = this.context
    	return (
		<div>
			<div className='banner'>
		
			</div>
		</div>
		);
    	}
}
