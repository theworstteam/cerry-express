import React from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";

export default function Error() {
	return (
		<>
			<Title name='Error Page' />
			<div className=''>
				<Link to='/' className='btn-primary'>
					return home
				</Link>
			</div>
		</>
	);
}
