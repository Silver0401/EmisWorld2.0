import CaritasLogo from '../images/SocietiesLogos/Caritas.png';
import CorLogo from '../images/SocietiesLogos/Cor.png';
import FidelitasLogo from '../images/SocietiesLogos/Fidelitas.png';
import IustitiaLogo from '../images/SocietiesLogos/Iustitia.png';
import PrudentiaLogo from '../images/SocietiesLogos/Prudentia.png';
import SapientiaLogo from '../images/SocietiesLogos/Sapientia.png';
import TemperantiaLogo from '../images/SocietiesLogos/Temperantia.png';
import TrascendentiaLogo from '../images/SocietiesLogos/Trascendentia.png';
import VeritasLogo from '../images/SocietiesLogos/Veritas.png';
import Person from '../images/person.jpg';

export type academicSocieties =
	| 'Cor'
	| 'Caritas'
	| 'Veritas'
	| 'Fidelitas'
	| 'Temperantia'
	| 'Iustitia'
	| 'Prudentia'
	| 'Sapientia'
	| 'Trascendentia';

interface peopleProps {
	imgSrc: string;
	nombre: string;
	contactMethod: string;
}

export interface academicSocietiesProps {
	img: string;
	color: {
		hell: string;
		dunkel: string;
	};
	virtue: string;
	lemma: string;
	mascot: string;
	people: peopleProps[];
}

export type academicSocietiesIndexed = {
	[key in academicSocieties]: academicSocietiesProps;
};

export const academicSocietiesObject: academicSocietiesIndexed = {
	Cor: {
		img: CorLogo,
		color: {
			hell: '#ea8198',
			dunkel: '#d50032'
		},
		virtue: 'El Coraje',
		lemma: '"Semper fortis" - Siempre Fuerte',
		mascot: 'El León',
		people: [
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			},
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			},
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			},
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			}
		]
	},
	Fidelitas: {
		img: FidelitasLogo,
		color: {
			hell: '#edd485',
			dunkel: '#ddab0e'
		},
		virtue: 'La Fidelidad',
		lemma: '“Esse quam videri” - Ser, en Lugar de Parecer',
		mascot: 'el Ciervo',
		people: [
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			},
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			},
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			},
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			}
		]
	},
	Temperantia: {
		img: TemperantiaLogo,
		color: {
			hell: '#b7d898',
			dunkel: '#71b331'
		},
		virtue: 'La Templanza',
		lemma: '"Magnánimo en la victoria, sereno ante la adversidad"',
		mascot: 'El Toro',
		people: [
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			},
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			},
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			},
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			}
		]
	},
	Caritas: {
		img: CaritasLogo,
		color: {
			hell: '#b28dba',
			dunkel: '#661d75'
		},
		virtue: 'La Caridad',
		lemma: '"Non sibi sed omnibus" - No para sí mismo, sino para todos',
		mascot: 'El Lobo',
		people: [
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			},
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			},
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			},
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			}
		]
	},
	Veritas: {
		img: VeritasLogo,
		color: {
			hell: '#999191',
			dunkel: '#342324'
		},
		virtue: 'La Verdad',
		lemma: '“Scientia verita est" - La Ciencia es la Verdad',
		mascot: 'el Búho',
		people: [
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			},
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			},
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			},
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			}
		]
	},
	Iustitia: {
		img: IustitiaLogo,
		color: {
			hell: '#8997c2',
			dunkel: '#143188'
		},
		virtue: 'La Justicia',
		lemma: '“Iustitia est regina virtutis” - La Justicia es la Reina de las Virtudes',
		mascot: 'El Águila',
		people: [
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			},
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			},
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			},
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			}
		]
	},
	Prudentia: {
		img: PrudentiaLogo,
		color: {
			hell: '#9f9e9f',
			dunkel: '#413e40'
		},
		virtue: 'La Prudencia',
		lemma: '“Ubi concordia, ibi victoria” - Donde está la Unidad, está la Victoria',
		mascot: 'El Elefante',
		people: [
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			},
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			},
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			},
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			}
		]
	},
	Sapientia: {
		img: SapientiaLogo,
		color: {
			hell: '#eca88b',
			dunkel: '#db5217'
		},
		virtue: 'La Sabiduría',
		lemma:
			'“Artes serviunt vitae, sapientia imperat” - Las Artes Consuelan la Vida, la Sabiduría la dirige',
		mascot: 'El Oso',
		people: [
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			},
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			},
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			},
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			}
		]
	},
	Trascendentia: {
		img: TrascendentiaLogo,
		color: {
			hell: '#a6d3e2',
			dunkel: '#4ea9c6'
		},
		virtue: 'La Trascendencia',
		lemma: '"Homo trascendentia est" - El Hombre es Trascendencia',
		mascot: 'El Caballo',
		people: [
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			},
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			},
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			},
			{
				contactMethod: 'asdfa',
				imgSrc: Person,
				nombre: 'asdfa'
			}
		]
	}
};
// :)
