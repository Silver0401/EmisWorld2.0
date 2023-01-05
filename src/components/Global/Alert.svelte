<script lang="ts">
	type ButtonSizes = 'Limits' | 'Auto';

	export let text: string = 'Awaiting text';
	export let size: ButtonSizes = 'Auto';
</script>

<div class="alert" style:width={size === 'Limits' ? '80%' : 'auto'}>
	<p>{text}</p>
	<div class="svgImgContainer">
		<slot name="icon" />
	</div>
</div>

<style>
	.alert {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-direction: row;
		padding: clamp(0.5rem, 1vw, 1rem) clamp(1rem, 1vw, 2rem);
		background-color: #9ac4fd;
		color: #353752;
		border-radius: 15px;
		transition: box-shadow 1s;
		text-align: center;
	}

	.svgImgContainer {
		margin-left: 10px;
		position: relative;
		width: 40px;
		height: 40px;
		display: grid;
		place-items: center;
		border-radius: 50%;
		background-color: white;
	}
</style>
