<script>
	import { Lottie } from 'lottie-svelte';
	import Button from '../../components/Global/Button.svelte';
	import Airplane from '../../lib/svg/airplane.svg';
</script>

<svelte:head>
	<title>Emis World - Contact</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section>
	<div class="leftContainer">
		<form>
			<span>
				<h1>{'Contáctanos'}</h1>
				<p>
					{'¿Eres profesor de nuestra Escuela y te interesa ser parte de una Sociedad Académica ?'}
				</p>
			</span>
			<span>
				<label>
					{'Nombre'}

					<input type="text" placeholder="Nombre Completo" />
				</label>
			</span>
			<span>
				<label>
					{'Correo'}
					<input type="text" placeholder="Correo de contácto" />
				</label>
			</span>
			<span>
				<label>
					{'Link de tu Linkedin'}
					<input type="text" placeholder="url a tu perfil de linkedin" />
				</label>
			</span>
			<span>
				<label>
					{'Area de Educación'}
					<input type="tetxt" placeholder="Exploración, clínica, enfoque, etc." />
				</label>
			</span>
			<span style:display="grid" style:place-items="center">
				<Button text="Enviar" size="Limits">
					<img slot="icon" src={Airplane} alt="airplaneLogo" width="70%" />
				</Button>
			</span>
		</form>
	</div>
	<div class="rightContainer">
		<Lottie path={'./lotties/doctorsLottie.json'} autoplay={true} loop={true} />
	</div>
</section>

<style>
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

	.rightContainer {
		position: relative;
		flex: 1;
		height: 100%;
		flex-basis: 300px;
		background: radial-gradient(transparent, #353752);
		display: grid;
		place-items: center;
	}
	.leftContainer {
		position: relative;
		flex: 1;
		height: 100%;
		flex-basis: 500px;
		display: grid;
		place-items: center;
	}

	form {
		width: 90%;
		height: 90%;
		display: flex;
		justify-content: space-evenly;
		align-items: flex-start;
		flex-direction: column;
	}

	form span {
		margin-left: 40px;
		width: calc(100% - 80px);
	}
	form label {
		margin-left: 5px;
	}

	span input {
		border-radius: 5px;
		padding: 5px 10px;
		width: 100%;
	}
</style>
