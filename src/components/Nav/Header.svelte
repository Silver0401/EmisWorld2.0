<script lang="ts">
	// Component and Library Imports
	import { fly } from 'svelte/transition';
	import HomeSvg from '$lib/svg/home.svg';
	import AirplaneSvg from '$lib/svg/airplane.svg';
	import WorkSvg from '$lib/svg/work.svg';
	import CalendarSvg from '$lib/svg/calendar.svg';
	import ListItem from './ListItem.svelte';

	// Functions and Variables
	let burgerState: burgerProps = 'Opened';
	let windowWidth: number = 0;

	const ToggleBurger = () => {
		if (burgerState === 'Closed') {
			burgerState = 'Opened';
		} else {
			burgerState = 'Closed';
		}
	};

	const ToggleBurgerOnSize = () => {
		if (windowWidth < 624) {
			burgerState = 'Closed';
		}
	};

	const NavResize = () => {
		if (windowWidth > 624) {
			burgerState = 'Opened';
		} else {
			burgerState = 'Closed';
		}
	};
</script>

<svelte:window bind:innerWidth={windowWidth} on:resize={NavResize} />

<header>
	<button class="burger" on:click={ToggleBurger}>
		<span class="line1" />
		<span class="line2" />
		<span class="line3" />
	</button>

	{#if burgerState === 'Opened'}
		<nav transition:fly={{ x: 300 }}>
			<ul>
				<ListItem href="/" title="Inicio" svgImg={HomeSvg} {ToggleBurgerOnSize} />
				<ListItem
					href={'https://www.google.com'}
					title="Eventos"
					newWindow
					svgImg={CalendarSvg}
					{ToggleBurgerOnSize}
				/>
				<ListItem
					href="/godricsHat"
					title="Sombrero de Gódric"
					svgImg={WorkSvg}
					{ToggleBurgerOnSize}
				/>
				<ListItem href="/contact" title="Únetenos" svgImg={AirplaneSvg} {ToggleBurgerOnSize} />
			</ul>
		</nav>
	{/if}
</header>

<style>
	.burger {
		z-index: 10;
		position: absolute;
		top: 15px;
		right: 15px;
		width: 40px;
		height: 40px;
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		border: 3px solid #4694fe;
		cursor: pointer;
		visibility: hidden;
	}

	.burger span {
		width: 75%;
		height: 3px;
		border-radius: 20px;
		background-color: #353752;
		pointer-events: none;
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 60px;
		z-index: 5;
		/* border: 2px solid white; */
		/* background-color: rgba(255, 255, 255, 0.5); */
		/* border-bottom-left-radius: 100px;
		border-bottom-right-radius: 100px; */
	}

	nav {
		position: relative;
		display: flex;
		justify-content: center;
		width: 100%;
		--background: transparent;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	@media (max-width: 624px) {
		header {
			width: 60px;
			height: 60px;
			top: 0px;
			right: 0px;
			position: absolute;
			border: 2px solid transparent;
			background-color: rgba(255, 255, 255, 0);
		}

		.burger {
			visibility: visible;
		}

		nav {
			position: absolute;
			z-index: 5;
			top: 0;
			right: 0;
			width: 300px;
			height: 100vh;
			background-color: rgba(255, 255, 255, 0.8);
			backdrop-filter: blur(10px);
			transition: transform 350s;
		}

		nav ul {
			width: 100%;
			height: 100%;
			flex-direction: column;
			margin-top: 60px;
			height: 400px;
		}
	}
</style>
