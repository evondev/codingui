import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  .sweet-noti {
		padding: 2rem;
		background-color: white;
		box-shadow: 0px 2px 7px rgba(63, 63, 122, 0.1);
		border-radius: 8px;
		position: fixed;
		top: 1rem;
		right: 1rem;
		z-index: 100000;
		display: flex;
		align-items: center;
		transition: 0.2s linear;
		animation: fadeAlert 2s forwards 1 linear;
    color: ${(props) => props.theme.secondary};
		&:before {
			content: "";
			width: 100%;
			height: 4px;
			border-radius: 8px;
			background-color: currentColor;
			position: absolute;
			top: -4px;
			left: 0;
		}
		@media screen and (max-width: 767px) {
			width: auto;
			left: 1rem;
			right: 1rem;
			top: 1rem;
			padding: 1.5rem;
		}
	}
	i.sweet-noti__icon {
		font-size: 4rem;
		margin-right: 1.5rem;
		flex-shrink: 0;

	}
	.sweet-noti__content{
		width: 100%;
		color: #474747;
		letter-spacing: 0.015em;
	}
	.sweet-noti__title {
		margin-bottom: 5px;
    text-transform: uppercase;
    font-weight: bold;
	}
	.sweet-noti__message {
		font-size: 1.4rem;
		line-height: 1.4;

	}

	@keyframes fadeAlert {
		0% {
			opacity: 0;
			visibility: hidden;
		}
		10%,90% {
			opacity: 1;
			visibility: visible;
		}
		100% {
			opacity: 0;
			visibility: hidden;
		}
	}


`;
