import { Global, css } from '@emotion/react'

import RubikBold from '../fonts/Rubik-Bold.ttf'
import RubikLight from '../fonts/Rubik-Light.ttf'
import RubikMedium from '../fonts/Rubik-Medium.ttf'
import RubikRegular from '../fonts/Rubik-Regular.ttf'
import RubikSemiBold from '../fonts/Rubik-SemiBold.ttf'

import { transitionTime } from '../Constant/TransitionTime'

const globalStyles = css`
	@font-face {
		font-family: 'RubikBold';
		src: url(${RubikBold}) format('truetype');
		font-weight: bold;
		font-style: bold;
		font-display: swap;
	}

	@font-face {
		font-family: 'RubikLight';
		src: url(${RubikLight}) format('truetype');
		font-weight: 300;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'RubikMedium';
		src: url(${RubikMedium}) format('truetype');
		font-weight: 500;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'RubikRegular';
		src: url(${RubikRegular}) format('truetype');
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'RubikSemiBold';
		src: url(${RubikSemiBold}) format('truetype');
		font-weight: 600;
		font-style: normal;
		font-display: swap;
	}

	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	body {
		font-family: 'RubikRegular', sans-serif;
	}

	body::-webkit-scrollbar {
		background: #ecf0f1;
		width: 0.4em;
	}

	body::-webkit-scrollbar-thumb {
		background: #34495e;
		border: 1px solid;
		border-radius: 10px;
		height: 6em;
	}

	body::-webkit-scrollbar-thumb:hover {
		background: #01bcf3;
	}

	body::-webkit-scrollbar-track {
		background-color: #ecf0f1;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		padding: 0;
		margin: 0;
	}

	.global-icons {
		width: 20px;
		height: 20px;
	}

	.container {
		max-width: 480px;
		padding: 0 15px;
		margin: 0 auto;

		@media screen and (min-width: 768px) {
			max-width: 768px;
		}

		@media screen and (min-width: 1200px) {
			max-width: 1200px;
		}
	}

	.dark {
		background-color: #34495e;
		transition: background-color ${transitionTime.transition};
	}

	.light {
		background-color: #ecf0f1;
		transition: background-color ${transitionTime.transition};
	}

	.ReactModal__Overlay--after-open {
		background-color: #ffffff1f !important;
	}
	.modal-dark {
		position: absolute;
		inset: 40px;
		border: 1px solid rgb(204, 204, 204);
		background-color: #34495e;
		overflow: auto;
		border-radius: 4px;
		outline: none;
		padding: 20px;
		transition: background-color 300ms;
	}
	.modal-light {
		position: absolute;
		inset: 40px;
		border: 1px solid rgb(204, 204, 204);
		background-color: #fff;
		overflow: auto;
		border-radius: 4px;
		outline: none;
		padding: 20px;
		transition: background-color 300ms;
	}

	.ReactModal__Overlay {
		opacity: 0;
		transition: opacity 300ms ease-in-out;
	}

	.ReactModal__Overlay--after-open {
		opacity: 1;
	}

	.ReactModal__Overlay--before-close {
		opacity: 0;
	}

	.checkbox-input[type='checkbox'] {
		display: none;
		height: 0;
		width: 0;
		visibility: hidden;
	}

	.checkbox-label {
		cursor: pointer;
		text-indent: -9999px;
		width: 38px;
		height: 17px;
		background: grey;
		display: block;
		border-radius: 100px;
		position: relative;
	}

	.checkbox-label:after {
		content: '';
		position: absolute;
		top: 2px;
		left: 2px;
		width: 14px;
		height: 13px;
		background: #fff;
		border-radius: 90px;
		transition: 0.3s;
	}

	.checkbox-input:checked + .checkbox-label {
		background: #2ecc71;
	}

	.checkbox-input:checked + .checkbox-label:after {
		left: calc(100% - 5px);
		transform: translateX(-100%);
	}

	.checkbox-label:active:after {
		width: 20px;
	}
`

const GlobalStyles: React.FC = () => <Global styles={globalStyles} />

export default GlobalStyles
