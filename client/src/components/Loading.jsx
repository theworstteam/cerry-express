import React from "react";
import loadingGif from "../images/gif/loading.gif";

export default function Loading({ name }) {
	return (
		<div className='loading'>
			<h4>Loading {name}...</h4>
			<img src={loadingGif} alt='' />
		</div>
	);
}
