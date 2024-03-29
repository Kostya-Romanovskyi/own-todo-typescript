import styled from '@emotion/styled'
import { TypeThemeProps } from '../../types/Theme.types'
import { transitionTime } from '../../Constant/TransitionTime'

export const StyledButton = styled.button<TypeThemeProps>`
	font-family: ${({ theme }) => theme.fontFamily};

	width: 75px;

	text-align: center;

	padding: 5px 10px;
	margin-left: 10px;

	border: 1px solid ${({ theme }) => theme.border};
	border-radius: 5px;

	color: ${({ theme }) => theme.color};
	background-color: ${({ theme }) => theme.backgroundColor};

	transition: background-color ${transitionTime.transition}, color ${transitionTime.transition},
		border ${transitionTime.transition};

	@media screen and (min-width: 1200px) {
		font-family: 'RubikMedium', sans-serif;

		margin-left: 15px;

		font-size: 15px;

		width: 80px;

		cursor: pointer;

		&:hover,
		&:focus {
			color: ${({ theme }) => theme.backgroundColor};
			background-color: ${({ theme }) => theme.border};
		}
	}
`
