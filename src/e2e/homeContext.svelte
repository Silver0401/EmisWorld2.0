<script lang="ts">
	import { setContext } from 'svelte';
	import { HomeContextKey } from '$lib/constants/globals';

	type homeScrollStates = 'OnTop' | 'BelowTop';
	interface HomeContextProps {
		HomeScrollState: homeScrollStates;
	}

	const homeContext: HomeContextProps = {
		HomeScrollState: 'OnTop'
	};

	setContext(HomeContextKey, homeContext);
</script>
