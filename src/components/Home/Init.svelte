<script lang="ts">
	import EmisWorldLogoPurple from '../../lib/svg/EmisWorldLogoPurple.svg';
	import { fade } from 'svelte/transition';
	import Alert from '../Global/Alert.svelte';
	import Button from '../Global/Button.svelte';
	import { onMount } from 'svelte';
	import arrowRight from '../../lib/svg/arrow-right.svg';
	import user from '../../lib/svg/user.svg';
	import { academicSocietiesObject } from '../../lib/constants/academicSocieties';

	type animationStates = 'paused' | 'running';

	let animationState: animationStates = 'running';
	let windowWidth: number = 0;

	let selectedAcademicSociety: number = Math.floor(
		Math.random() * Object.keys(academicSocietiesObject).length
	);

	onMount(() => {
		const intervalId = setInterval(() => {
			if (animationState === 'running') {
				if (selectedAcademicSociety === Object.values(academicSocietiesObject).length - 1) {
					selectedAcademicSociety = 0;
				} else {
					selectedAcademicSociety += 1;
				}
			}
		}, 2450);

		return () => {
			clearInterval(intervalId);
		};
	});
</script>

<svelte:window bind:innerWidth={windowWidth} />

<section>
	<div class="leftContainer">
		<div class="homeLogoContainer">
			<img alt="Emis World Logo" src={EmisWorldLogoPurple} />
		</div>
		<h4 class="homeTitle">
			{'Conoce a tu Sociedad Académica ​y a las personas que te pueden ayudar en Monterrey'}
		</h4>
		<Alert size="Limits" text="¡Haz click en el color de tu Sociedad!">
			<img
				slot="icon"
				alt="arrowRight"
				src={arrowRight}
				style:transform={windowWidth < 624 ? 'rotate(90deg)' : 'rotate(0deg)'}
			/>
		</Alert>
		<Button
			href="/godricsHat"
			text="Aun no conoces tu sociedad Académica? Haz click aquí"
			size="Limits"
		>
			<img slot="icon" alt="userLogo" src={user} style:width={'70%'} />
		</Button>
	</div>
	<div class="rightContainer">
		<div
			class="outerCircle"
			on:mouseenter={() => (animationState = 'paused')}
			on:mouseleave={() => (animationState = 'running')}
		>
			<div style:animation-play-state={animationState} class="spheresCointainer">
				{#each Object.entries(academicSocietiesObject) as [key, value]}
					<div
						id="colorShpere"
						class={`${key}Sphere`}
						style:background-color={value.color.dunkel}
						style:box-shadow={`0px 0px 20px${value.color.dunkel}`}
						on:mouseenter={() => {
							selectedAcademicSociety = Object.keys(academicSocietiesObject).indexOf(key);
						}}
					/>
				{/each}
			</div>

			<div class="middleCircle">
				<div class="innerCircle">
					{#each Object.entries(academicSocietiesObject) as [key, value]}
						{#if key === Object.keys(academicSocietiesObject)[selectedAcademicSociety]}
							<a
								transition:fade
								class="societyLogoContainer"
								style:box-shadow={`0px 0px 70px ${value.color.dunkel}`}
								style:background-color={value.color.hell}
								href={`#${key}Block`}
							>
								<img alt="DinamicLogo" src={value.img} />
							</a>
							<h3 class="societyName" style:color={value.color.dunkel}>{key}</h3>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</div>

	<div class="middleArrowContainer">
		<img src={arrowRight} alt="arrowSvg" />
	</div>
</section>

<style>
	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	section {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		z-index: 1;
	}

	.leftContainer,
	.rightContainer {
		flex: 1 1;
		height: 95%;
		flex-basis: 300px;
		display: flex;
		justify-content: space-evenly;
		flex-direction: column;
		align-items: center;
		overflow: hidden;
		margin-bottom: 5%;
	}

	/* .leftContainer {
		height: 90%;
		margin-bottom: 10%;
	} */

	.homeLogoContainer {
		width: 65%;
	}

	.homeTitle {
		margin: 0px 10%;
		text-align: center;
	}

	.outerCircle,
	.middleCircle,
	.innerCircle {
		position: absolute;
		background-color: rgba(255, 255, 255, 0.3);
		border-radius: 50%;
		display: grid;
		place-items: center;
		padding: 0;
		margin: 0;
		border: 3px solid rgba(255, 255, 255, 0.2);
	}

	.outerCircle {
		width: clamp(300px, 50vw, 600px);
		height: clamp(300px, 50vw, 600px);
	}

	.outerCircle #colorShpere {
		position: absolute;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		transition: transform 350ms;
		cursor: pointer;
	}

	.outerCircle #colorShpere:hover {
		transform: scale(2);
	}

	.outerCircle .spheresCointainer {
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		animation: rotate 22.5s linear infinite;
	}

	.outerCircle .spheresCointainer .CorSphere {
		top: 4%;
		left: 36%;
	}
	.outerCircle .spheresCointainer .FidelitasSphere {
		left: 11%;
		top: 20.5%;
	}
	.outerCircle .spheresCointainer .TemperantiaSphere {
		left: 2.5%;
		top: 46%;
	}
	.outerCircle .spheresCointainer .CaritasSphere {
		left: 11%;
		bottom: 20.5%;
	}
	.outerCircle .spheresCointainer .PrudentiaSphere {
		bottom: 27%;
		right: 7%;
	}
	.outerCircle .spheresCointainer .TrascendentiaSphere {
		top: 8%;
		right: 26%;
	}
	.outerCircle .spheresCointainer .SapientiaSphere {
		top: 33%;
		right: 4.5%;
	}
	.outerCircle .spheresCointainer .IustitiaSphere {
		bottom: 7%;
		right: 28%;
	}
	.outerCircle .spheresCointainer .VeritasSphere {
		bottom: 4%;
		left: 35%;
	}

	.middleCircle {
		backdrop-filter: blur(15px);
	}

	.middleCircle,
	.innerCircle {
		width: 85%;
		height: 85%;
	}

	.societyLogoContainer {
		border-radius: 50%;
		position: absolute;
		width: 100%;
		height: 100%;
		display: grid;
		place-items: center;
		cursor: pointer;
		border: clamp(20px, 3vw, 30px) solid rgba(255, 255, 255, 0.9);
		transition: transform 350ms;
	}

	.societyLogoContainer::after {
		position: absolute;
		content: '';
	}

	.societyLogoContainer:hover {
		transition: transform 350ms;
		transform: scale(1.1);
	}

	.societyName {
		position: absolute;
		top: -5%;
		padding: 5px 40px;
		background-color: rgba(255, 255, 255, 1);
		border: 2px solid white;
		text-align: center;
		border-radius: 20px;
		opacity: 0;
		visibility: hidden;
		transform: translateY(-100px);
		transition: all 350ms;
		pointer-events: none;
	}

	.societyLogoContainer:hover + .societyName {
		visibility: visible;
		transform: translateY(0px);
		opacity: 1;
		transition: all 350ms;
	}

	.societyLogoContainer img {
		position: absolute;
		width: 80%;
		height: 80%;
	}

	.middleArrowContainer {
		position: absolute;
		bottom: -50px;
		width: clamp(60px, 10vw, 80px);
		height: clamp(60px, 10vw, 80px);
		border-radius: 10px;
		backdrop-filter: blur(5px);
		border: 3px solid white;
		transform: rotate(45deg);
		display: grid;
		place-items: center;
	}

	.middleArrowContainer img {
		width: 90%;
		height: 90%;
		transform: rotate(45deg);
	}

	@media (max-width: 624px) {
		.leftContainer {
			height: 60%;
		}
		.rightContainer {
			height: 40%;
		}

		section {
			padding-bottom: 100px;
		}

		.middleArrowContainer {
			bottom: -30px;
		}
	}
</style>
