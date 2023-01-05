<script lang="ts">
	import '../app.postcss';
	import Header from '../components/Nav/Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<div class="appInnerContainer">
		<Header />
		<main>
			<slot />
		</main>
	</div>
	<div class="bgImg" />
</div>

<style>
	.app {
		position: relative;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: #dfdee0;
	}

	.appInnerContainer {
		z-index: 1;
	}

	@media (max-width: 624px) {
		.appInnerContainer {
			height: calc(100vh - 1rem);
		}
	}

	.bgImg {
		position: absolute;
		width: 100%;
		height: 100%;
		opacity: 0.3;
		background-size: cover;
		background-repeat: no-repeat;
		background-image: url('../lib/images/cubicBg.jpg');
		border-radius: 50px;
		z-index: 0;
	}

	main {
		position: relative;
		width: 100%;
		height: 100%;
		max-width: 88rem;
		margin: 0 auto;
		height: calc(100vh - 60px);
	}
</style>
