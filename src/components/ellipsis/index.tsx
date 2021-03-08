// Vendors
import React from 'react';

// Styles
import { Ellipsis as Root } from './styles';

interface IProps {
	children: React.ReactNode
}

function Ellipsis ({ children }: IProps) {

	return (
		<Root>
			{children}
		</Root>
	);

}

export default Ellipsis;
