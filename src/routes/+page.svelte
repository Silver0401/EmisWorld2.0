<script lang="ts">
	import Init from '../components/Home/Init.svelte';
	import SecondBlock from '../components/Home/SecondBlock.svelte';

	type homeScrollStates = 'OnTop' | 'BelowTop';
	let HomeScrollState: homeScrollStates = 'OnTop';
	let homeScrollValue: any = 0;
	let counter: number = 0;

	const scrollHandle = () => {
		if (homeScrollValue.scrollTop > 0) {
			if (counter === 0) {
				HomeScrollState = 'BelowTop';
				counter += 1;
			}
		} else {
			HomeScrollState = 'OnTop';
			counter = 0;
		}
	};
</script>

<svelte:head>
	<title>Emis World - Home</title>
	<meta
		name="description"
		content="Pagina oficial de las sociedades academicas de la escuela de Medicina y ciencias de la salud"
	/>
</svelte:head>

<section class="HomeContainer" bind:this={homeScrollValue} on:scroll={scrollHandle}>
	<Init />
	<SecondBlock />
</section>

<style>
	.HomeContainer {
		position: relative;
		width: 100%;
		height: 100%;
		overflow-y: scroll;
		overflow-x: hidden;
		scroll-behavior: smooth;
	}
	@media (max-width: 624px) {
		.HomeContainer {
			border-radius: 0px;
			height: 100vh;
			background-color: transparent;
		}
	}
</style>
