// Vendors
import styled, { css } from 'styled-components';

export const Root = styled.div`
	width: 100%;
	min-height: 8rem;
`;

export const Bar = styled.div`
	position: fixed;
	width: 100%;
	height: 8rem;
	box-sizing:border-box;

	display: flex;
	align-items: center;
	justify-content: space-between;

	box-shadow:0 0 0.75rem 0 rgba(0,0,0,.05);
	background: ${({ theme }) => theme.color.white};

	padding: 1rem 1.5rem;
	@media (${props => props.theme.media.mobile_large}) {
		padding: 2rem 3rem;
	}
`;

export const Part = styled.div`

`;


/*
 * Route
 */
export const RouteList = styled.ul`
	margin: 0;
	padding: 0;
	list-style-type: none;

	display: flex;
	flex-direction: row;
`;

export const RouteItem = styled.li`
	margin: 0 0 0 2rem;
	&:first-child {
		margin: 0;
	}
`;

export const RouteLink = styled.a<{ $is_active: boolean }>`
	text-decoration: ${({ $is_active }) => $is_active ? 'underline' : 'none'};

	color: ${({ theme }) => theme.color.blue_dark};
`;

export const Heading3 = styled.h3`
	font-size: 1.6rem;
`;


/*
 * Lang
 */
export const LangList = styled.ul`
	margin: 0;
	padding: 0;
	list-style-type: none;

	display: flex;
	flex-direction: row;
`;

export const LangItem = styled.li`
	margin: 0 2rem 0 0;
	&:last-child {
		margin: 0;
	}
`;

export const LangLink = styled.a<{ is_active: boolean }>`
	text-decoration: none;

	cursor: pointer;
	font-size: 1.4rem;

	${({ is_active }) => is_active && (
		css`
			font-weight: 700;
			color: blue;
		`
	)}
`;
