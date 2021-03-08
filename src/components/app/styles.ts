// Vendors
import styled from 'styled-components';

export const App = styled.div`
	height: 100%;

	display: flex;
	flex-direction: column;
`;

export const Body = styled.div`
	flex: 1;

	margin: 1rem;
	@media(${props => props.theme.media.tablet_large}) {
		margin: 3rem;
	}
`;
