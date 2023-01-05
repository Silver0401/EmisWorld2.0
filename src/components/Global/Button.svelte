<script lang="ts">
	type ButtonSizes = 'Limits' | 'Auto';

	export let text: string = 'Awaiting text';
	export let size: ButtonSizes = 'Auto';
	export let href: string | undefined = undefined;
</script>

<button
	class={`${href ? 'proButtonNoPadding' : 'proButtonPadding'} proButton`}
	style:width={size === 'Limits' ? '80%' : 'auto'}
>
	{#if href}
		<a {href}>
			<p>{text}</p>
			<div class="svgImgContainer">
				<slot name="icon" />
			</div>
		</a>
	{:else}
		<p>{text}</p>
		<div class="svgImgContainer">
			<slot name="icon" />
		</div>
	{/if}
</button>

<style>
	.proButton {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-direction: row;
		background-color: #353752;
		color: white;
		border-radius: 20px;
		transition: background-color 350ms;
	}

	.proButtonPadding {
		padding: clamp(0.5rem, 1vw, 1rem) clamp(1rem, 1vw, 2rem);
	}
	.proButtonNoPadding {
		padding: 0;
	}

	a {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-direction: row;
		margin: clamp(0.5rem, 1vw, 1rem) clamp(1rem, 1vw, 2rem);
		width: 100%;
		height: 100%;
	}

	p {
		color: white;
		transition: color 350ms;
	}

	.proButton:hover {
		background-color: white;
		transition: background-color 350ms;
	}
	.proButton:hover p {
		color: #353752;
		transition: color 350ms;
	}
	.proButton:hover .svgImgContainer {
		background-color: #353752;
		transition: background-color 350ms;
	}

	.svgImgContainer {
		margin-left: 10px;
		position: relative;
		width: 40px;
		height: 40px;
		display: grid;
		place-items: center;
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 1);
		transition: background-color 350ms;
	}
</style>
