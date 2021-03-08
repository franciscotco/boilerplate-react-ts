// Vendors
import styled from 'styled-components';

export const Section = styled.div`
	margin: auto;
	max-width: 124rem;

	display: flex;
	flex-direction: column;
	box-sizing: border-box;

	overflow: hidden;
	border-radius: 0.4rem;
	box-shadow: rgb(0 0 0 / 15%) 0px 1px 1px 0px;
	background-color: ${({ theme }) => theme.color.gray_lightest};
`;

export const Back = styled.div`
	padding: 1.5rem 2.25rem;

	display: flex;
	justify-content: left;

	border-bottom: 1px solid rgba(0, 0, 0, 0.024);
	background-color: ${({ theme }) => theme.color.blue_background};
`;

export const Link = styled.a`
	text-decoration: none;

	font-weight: 700;
	font-size: 1.4rem;
	text-transform:uppercase;
	color: ${({ theme }) => theme.color.blue_dark};
`;

export const Heading1 = styled.h1`
	margin: 0;
	padding: 2.25rem;

	text-align: center;
	background-color: ${({ theme }) => theme.color.white};
	border-bottom: 1px solid ${({ theme }) => theme.color.gray_medium};
`;

export const Content = styled.div`
	padding: 2rem;

	@media(${props => props.theme.media.tablet_large}) {
		padding: 4rem;
	}
`;
