<script lang="ts">
	import godricsHat from '../../lib/gifs/hatAnimation.gif';
	import { academicSocietiesObject } from '$lib/constants/academicSocieties';
</script>

<svelte:head>
	<title>Emis World - GodricsHat</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section>
	<div class="godricHatsContainer">
		<img src={godricsHat} alt="godricsHat" />
	</div>

	{#each Object.entries(academicSocietiesObject) as [key, value]}
		<div class={`${key}Bubble ASBuble`}>
			<img alt={key} src={value.img} />
			<div class="bubbleContainer ASbubbleShadow" />
		</div>
	{/each}
	<div class="textContainer">
		<h1>{'Bienvenido nuevo EMIS'}</h1>
		<p>
			{'Soy el sombrero de Grodic, para saber la casa a la que perteneces debes escribir en la parte inferior tu matrícula'}
		</p>
	</div>
	<div class="inputContainer">
		<input type="text" placeholder="Tu Matrícula Aquí" />
	</div>
</section>

<style>
	section {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.textContainer {
		position: absolute;
		z-index: 1;
		padding: 30px;
		width: 600px;
		height: 170px;
		background-color: rgba(255, 255, 255, 0.6);
		border-radius: 20px;
		backdrop-filter: blur(10px);
		top: 25px;
		margin-left: 100px;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-direction: column;
	}

	.textContainer h1,
	p {
		text-align: center;
	}

	.inputContainer {
		position: absolute;
		padding: 30px;
		width: 300px;
		height: 70px;
		background-color: rgba(255, 255, 255, 0.6);
		border-radius: 20px;
		backdrop-filter: blur(10px);
		bottom: 80px;
		margin-left: 0px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.inputContainer input {
		width: 100%;
		background-color: #353752;
		color: white !important;
		border-radius: 5px;
		padding: 10px;
		text-align: center;
	}

	.ASBuble {
		position: absolute;
		width: 100px;
		height: 100px;
		display: grid;
		place-items: center;
	}
	.ASBuble img {
		position: absolute;
		width: 80%;
		height: 80%;
		z-index: 0;
	}
	.ASbubbleShadow {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 1;
	}

	.CorBubble {
		top: 5%;
		left: 20%;
		animation: levitateUp 5s linear infinite;
		animation-delay: 50ms;
	}
	.TrascendentiaBubble {
		top: 22%;
		left: 12%;
		animation: levitateUp 5s linear infinite;
		animation-delay: 200ms;
	}
	.PrudentiaBubble {
		left: 10%;
		top: 42%;
		animation: levitateDown 5s linear infinite;
		animation-delay: 150ms;
	}
	.SapientiaBubble {
		top: 62%;
		left: 12%;
		animation: levitateUp 5s linear infinite;
		animation-delay: 20ms;
	}
	.IustitiaBubble {
		top: 80%;
		left: 20%;
		animation: levitateDown 5s linear infinite;
		animation-delay: 370ms;
	}
	.VeritasBubble {
		bottom: 5%;
		right: 20%;
		animation: levitateDown 5s linear infinite;
		animation-delay: 180ms;
	}
	.CaritasBubble {
		bottom: 22%;
		right: 12%;
		animation: levitateUp 5s linear infinite;
		animation-delay: 440ms;
	}
	.FidelitasBubble {
		bottom: 45%;
		right: 10%;
		animation: levitateDown 5s linear infinite;
		animation-delay: 310ms;
	}
	.TemperantiaBubble {
		top: 20%;
		right: 12%;
		animation: levitateUp 5s linear infinite;
		animation-delay: 90ms;
	}

	.CorBubble .ASbubbleShadow {
		animation: rotateLeft 5s linear infinite;
	}
	.TrascendentiaBubble .ASbubbleShadow {
		animation: rotateRight 5s linear infinite;
	}
	.PrudentiaBubble .ASbubbleShadow {
		animation: rotateRight 5s linear infinite;
	}
	.SapientiaBubble .ASbubbleShadow {
		animation: rotateLeft 5s linear infinite;
	}
	.IustitiaBubble .ASbubbleShadow {
		animation: rotateRight 5s linear infinite;
	}
	.VeritasBubble .ASbubbleShadow {
		animation: rotateLeft 5s linear infinite;
	}
	.CaritasBubble .ASbubbleShadow {
		animation: rotateRight 5s linear infinite;
	}
	.FidelitasBubble .ASbubbleShadow {
		animation: rotateLeft 5s linear infinite;
	}
	.TemperantiaBubble .ASbubbleShadow {
		animation: rotateLeft 5s linear infinite;
	}
	.leftContainer {
		flex-basis: 400px;
	}
	.rightContainer {
		flex-basis: 300px;
	}

	.godricHatsContainer {
		z-index: 0;
		overflow: hidden;
		position: absolute;
		height: 600px;
		width: 600px;
		display: grid;
		place-items: center;
		border-radius: 50%;
		border: 30px solid white;
		box-shadow: 0px 0px 20px white;
	}

	.godricHatsContainer img {
		transform: scale(1.8);
		opacity: 1;
	}

	.bubbleContainer {
		position: absolute;
		/* height: 450px;
		width: 450px; */
		/* background: black; */
		border-radius: 51% 49% 48% 52% / 62% 44% 56% 38%;
		opacity: 0.8;
		border: 2px solid black;
	}

	.bubbleContainer::before {
		content: '';
		position: absolute;
		height: 100%;
		width: 100%;
		/* background: black; */
		border-radius: 51% 49% 48% 52% / 62% 44% 56% 38%;
		box-shadow: -0px 0px 20px white, -5px 5px 20px white, inset -6px 6px 10px white,
			inset 2px 6px 10px white, inset 10px -10px 22px white, inset 5px -5px 44px #a8ceff;
	}

	.bubbleContainer::after {
		content: '';
		position: absolute;
		height: 20px;
		width: 20px;
		background: #e6fdfb;
		border-radius: 44% 56% 46% 54% / 36% 50% 50% 64%;
		left: 20%;
		top: 40px;
		box-shadow: 16px 40px 0 -10px white;
		opacity: 0.8;
	}

	@keyframes rotateRight {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	@keyframes rotateLeft {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(-360deg);
		}
	}
	@keyframes levitateUp {
		0% {
			transform: translateY(0px);
		}
		33% {
			transform: translateY(-10px);
		}
		66% {
			transform: translateY(5px);
		}
		100% {
			transform: translateY(0px);
		}
	}
	@keyframes levitateDown {
		0% {
			transform: translateY(0px);
		}
		33% {
			transform: translateY(10px);
		}
		66% {
			transform: translateY(-5px);
		}
		100% {
			transform: translateY(0px);
		}
	}
</style>
