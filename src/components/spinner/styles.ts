/*
 * Dependencies
 */
import styled, { keyframes } from 'styled-components';

const fade = keyframes`
	from { opacity: 1; }
	to   { opacity: 0.25; }
`;

/*
 *
 */
export const Root = styled.div`
	position:relative;
	margin:0 auto;

	display:block;
	width:100%;
	max-width:60px;

	&::after {
		content:"";
		display:block;
		padding-top:100%;
	}

	&.align-left {
		margin:0;
	}

	&.small {
		width:4.5rem;
	}

`;

/*
 *
 */
export const Segment = styled.div`
	position:absolute;
	left:46%;
	top:40%;

	width:6%;
	height:18%;

	opacity:1;

	background:${({ theme }) => theme.color.gray_dark};
	border-radius:50px;
	box-shadow:0 0 2px rgba(255,255,255,0.3);

	animation:${fade} 1s linear infinite;

	&:nth-child(1)  { animation-delay: 0s;       transform:rotate(0deg)   translate(0, -145%); }
	&:nth-child(2)  { animation-delay:-0.9167s;  transform:rotate(30deg)  translate(0, -145%); }
	&:nth-child(3)  { animation-delay:-0.833s;   transform:rotate(60deg)  translate(0, -145%); }
	&:nth-child(4)  { animation-delay:-0.75s;    transform:rotate(90deg)  translate(0, -145%); }
	&:nth-child(5)  { animation-delay:-0.667s;   transform:rotate(120deg) translate(0, -145%); }
	&:nth-child(6)  { animation-delay:-0.5833s;  transform:rotate(150deg) translate(0, -145%); }
	&:nth-child(7)  { animation-delay:-0.5s;     transform:rotate(180deg) translate(0, -145%); }
	&:nth-child(8)  { animation-delay:-0.41667s; transform:rotate(210deg) translate(0, -145%); }
	&:nth-child(9)  { animation-delay:-0.333s;   transform:rotate(240deg) translate(0, -145%); }
	&:nth-child(10) { animation-delay:-0.25s;    transform:rotate(270deg) translate(0, -145%); }
	&:nth-child(11) { animation-delay:-0.1667s;  transform:rotate(300deg) translate(0, -145%); }
	&:nth-child(12) { animation-delay:-0.0833s;  transform:rotate(330deg) translate(0, -145%); }
`;
