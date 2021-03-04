import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	.avatar-center {
		margin: 40px auto 0;
	}
	.image-cover {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: inherit;
	}
  .sweet-noti {
		padding: 5px;
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
		@media screen and (max-width: 767px) {
			width: auto;
			left: 1rem;
			right: 1rem;
			top: 1rem;
			padding: 1.5rem;
		}
	}
	i.sweet-noti__icon {
		font-size: 20px;
		width: 40px;
		height: 40px;
		border-radius: 8px;
		flex-shrink: 0;
		background-color: rgba(0, 255, 56, 0.1);
		display:flex;
		align-items:center;
		justify-content:center;
		color: var(--green);
	}
	.sweet-noti__title {
    font-weight: 500;
		font-size: 14px;
		color: #253B4F;
		padding: 0 10px;
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

	.back-to-top {
		width: 50px;
		height: 50px;
		position: fixed;
		left: 30px;
		bottom: 30px;
		z-index: 10;
		background-color: #ff7870;
		display:flex;
		align-items:center;
		justify-content:center;
		font-size: 20px;
		color: white;
		opacity: 0.5;
		&:hover {
			opacity: 1;
		}
	}


`;
