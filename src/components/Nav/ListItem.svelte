<script lang="ts">
	// Component and Library Imports
	import { page } from '$app/stores';

	// Props Variables
	export let href: string = '';
	export let title: string = '';
	export let svgImg: string = '';
	export let newWindow: boolean = false;
	export let ToggleBurgerOnSize: () => void;
	// export let burgerState: burgerProps = 'Closed';
</script>

<button
	class="li"
	on:click={ToggleBurgerOnSize}
	aria-current={$page.url.pathname === href ? 'page' : undefined}
>
	<a {href} target={newWindow ? '_blank' : undefined}>
		<p>{title}</p>
		<img alt="svg" src={svgImg} />
	</a>
</button>

<style>
	.li {
		position: relative;
		height: 100%;
	}

	.li img {
		margin-left: 10px;
		width: 30px;
		height: 30px;
	}

	.li[aria-current='page']::before {
		--size: 12px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: -6px;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid #4694fe;
		pointer-events: none;
	}

	.li a {
		display: flex;
		height: 100%;
		padding: 0 0.5rem;
		color: #353752;
		text-decoration: none;
		transition: color 0.2s linear;

		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	.li a::before {
		width: 0%;
		transition: width 350ms;
		content: '';
		position: absolute;
		bottom: 8px;
		left: 0;
		height: 2px;
		background-color: #353752;
		border-radius: 5px;
	}

	.li a:hover::before {
		width: 100%;
		transition: width 350ms;
	}

	@media (max-width: 624px) {
		.li {
			position: relative;
			width: 100%;
		}

		.li a {
			flex-direction: row-reverse;
			justify-content: flex-end;
		}

		.li a img {
			margin-right: 15px;
		}

		.li[aria-current='page']::before {
			top: 25px;
			left: 276px;
			transform: rotate(90deg);
		}
	}
</style>
