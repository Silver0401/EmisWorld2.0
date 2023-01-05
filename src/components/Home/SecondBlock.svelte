<script lang="ts">
	import { academicSocietiesObject } from '$lib/constants/academicSocieties';
	import PhoneSvg from '../../lib/svg/phone.svg';
</script>

<section>
	<div class="topBlock">
		<div class="dotsContainer">
			{#each Object.values(academicSocietiesObject) as academicSociety}
				<div class="dotContainer">
					<div class="dot" style:background-color={academicSociety.color.dunkel} />
				</div>
			{/each}
		</div>
		<h1>{'Sociedades y Personas'}</h1>
		<p>
			{'En esta sección puedes ver toda la información de las sociedades académicas, asi como de las personas que forman parte de cada una de estas'}
		</p>
	</div>
	<div class="scrollSocietiesContainer">
		{#each Object.entries(academicSocietiesObject) as [key, value]}
			<div
				id={`${key}Block`}
				class="academicSocietyContainer"
				style:background={`linear-gradient(to right, ${value.color.hell}, transparent)`}
			>
				<div
					class="coloredline"
					style:background-color={value.color.dunkel}
					style:box-shadow={`0px 0px 10px ${value.color.dunkel}`}
				/>
				<div class="imgContainer">
					<img alt={`${key}Logo`} src={value.img} />
				</div>
				<ul>
					<li>
						<h2>{key}</h2>
						<p>{'Sociedad Académica'}</p>
					</li>
					<li>
						<h4>{'Lema:'}</h4>
						<p>{value.lemma}</p>
					</li>
					<li>
						<h4>{'Virtud:'}</h4>
						<p>{value.virtue}</p>
					</li>
					<li>
						<h4>{'Mascota:'}</h4>
						<p>{value.mascot}</p>
					</li>
				</ul>
				<div class="peopleContainer">
					<div class="peopleInnerContainer">
						{#each value.people as peopleData}
							<div class="personBox">
								<div class="portraitContainer">
									<img alt="Person Portrait" src={peopleData.imgSrc} />
								</div>
								<div class="footContainer">
									<p>{peopleData.nombre}</p>
									<div class="svgPhoneContact">
										<img src={PhoneSvg} alt={'PhoneSvg'} />
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		position: relative;
		width: 100%;
		height: auto;
		padding: 20px;
	}

	.topBlock {
		width: 100%;
		display: flex;
		flex-direction: row;
		height: 400px;
		background-color: rgba(255, 255, 255, 0.6);
		border-radius: 20px;
		backdrop-filter: blur(5px);
	}

	.topBlock .dotsContainer {
		position: relative;
		width: 15%;
		padding: 5px;
		height: 80%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: clamp(10px, 4vw, 50px);
		margin: auto 0px;
		overflow: hidden;
	}
	.topBlock .dotsContainer .dotContainer {
		position: relative;
		flex-basis: 100px;
		flex-basis: 50px;
		display: grid;
		place-items: center;
	}
	.topBlock .dotsContainer .dot {
		position: relative;
		border-radius: 50%;
		width: clamp(10px, 3vw, 20px);
		height: clamp(10px, 3vw, 20px);
	}

	.topBlock h1,
	p {
		height: 100%;
	}
	.topBlock h1 {
		width: 40%;
		display: grid;
		place-items: center left;
		text-align: center;
		padding: 0px 10%;
	}
	.topBlock p {
		width: 45%;
		display: grid;
		place-items: center;
		text-align: justify;
		padding: 0px 5%;
	}

	.scrollSocietiesContainer {
		position: relative;
		margin-top: 40px;
		height: auto;
		border-radius: 20px;
		overflow: hidden;
	}

	.academicSocietyContainer {
		position: relative;
		width: 100%;
		display: flex;
		height: 500px;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 150px 0px;
	}

	ul,
	.peopleContainer {
		position: relative;
		height: 100%;
	}
	.academicSocietyContainer .coloredline {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 5px;
		height: calc(100% - 10px);
	}

	.academicSocietyContainer ul {
		height: 100%;
		width: 40%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: flex-start;
	}

	.academicSocietyContainer ul li {
		width: 90%;
		margin: 0px auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.academicSocietyContainer ul h4,
	p {
		width: auto;
		height: auto;
		display: grid;
		place-items: center;
		text-align: center;
	}
	.academicSocietyContainer ul h4 {
		width: auto;
		height: auto;
		display: grid;
		place-items: center;
		margin-right: 10px;
	}

	.academicSocietyContainer .imgContainer {
		position: absolute;
		top: 10px;
		left: 20px;
		width: 100px;
		width: 100px;
		display: grid;
		place-items: center;
	}
	.academicSocietyContainer .imgContainer img {
		height: 70%;
		width: auto;
	}

	.academicSocietyContainer .peopleContainer {
		position: relative;
		width: 60%;
		overflow-x: scroll;
		overflow-y: hidden;
	}
	.peopleContainer .peopleInnerContainer {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: auto;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	.peopleInnerContainer .personBox {
		position: relative;
		width: 250px;
		height: 80%;
		margin: 0px 70px;
		border: 3px solid #353752;
		display: flex;
		flex-direction: column;
		border-radius: 10px;
	}

	.personBox .portraitContainer {
		height: 90%;
		border-right-top: 2px solid #4593fd;
		width: 100%;
		border-top-right-radius: 10px;
		border-top-left-radius: 10px;
		overflow: hidden;
	}

	.personBox .portraitContainer img {
		height: 100%;
		width: 100%;
	}
	.personBox .footContainer {
		height: 10%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
	.personBox .footContainer .svgPhoneContact {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background-color: rgba(69, 147, 253, 0.5);
		display: grid;
		place-items: center;
	}
	.personBox .footContainer .svgPhoneContact img {
		width: 80%;
		height: 80%;
	}

	/* <div class="personBox">
	<div class="portraitContainer">
		<img alt="Person Portrait" src={peopleData.imgSrc} />
	</div>
	<div class="footContainer">
		<p>{peopleData.nombre}</p>
		<div class="svgPhoneContact">
			<img src={PhoneSvg} alt={'PhoneSvg'} />
		</div>
	</div>
</div> */

	@media (max-width: 624px) {
		.topBlock {
			flex-direction: column;
		}

		.topBlock .dotsContainer {
			position: absolute;
			width: 20%;
			height: 100%;
		}

		.topBlock h1,
		p {
			width: 80% !important;
			margin-left: 20%;
			padding: 0px 16% !important;
		}
		.topBlock h1 {
			height: 40%;
		}
		.topBlock p {
			height: 60%;
		}

		.academicSocietyContainer {
			height: 600px;
		}

		.textContainer,
		.imgContainer,
		ul {
			height: 33% !important;
		}

		.coloredline {
			position: absolute;
			left: 0;
			top: 0;
		}
		.academicSocietyContainer ul li {
			justify-content: center;
			align-items: center;
			margin: 10px 0px;
			border-bottom: 1px solid lightgrey;
		}

		.academicSocietyContainer ul li h4,
		p {
			justify-content: center;
			align-items: center;
			margin-left: 0%;
			width: 100% !important;
			text-align: center;
		}
	}
</style>
