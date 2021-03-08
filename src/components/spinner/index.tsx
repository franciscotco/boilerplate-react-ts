// Vendors
import React from 'react';

// Styles
import { Root, Segment } from './styles';

interface IProps {
}

function Spinner ({ }: IProps) {

	return (
		<Root>
			{Array.from(Array(12)).map((_,index) => <Segment key={index}/>)}
		</Root>
	);

}

export default Spinner;
