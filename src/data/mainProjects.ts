export interface cardsProject {
	name: string;
	description: string;
	image_path: string[];
	url_deploy: string;
	url_repo: string;
	tecnologies: string[];
	responsive: string;
}

const amerifan = [
	'/portiffolio web/amerifan/amerifan-home.PNG',
	'/portiffolio web/amerifan/cards-main.PNG',
	'/portiffolio web/amerifan/cards-filter.PNG',
];

const sunstore = ['portiffolio web/sunstore/sun-main.PNG', '/portiffolio web/sunstore/cards-sun.PNG'];

const netflix = ['/portiffolio web/netflix/main-netflix.PNG', '/portiffolio web/netflix/cards-main.PNG'];

const universidade = ['/portiffolio web/universidade/main.PNG', '/portiffolio web/universidade/clean.PNG'];

export const mainProjects: cardsProject[] = [
	{
		name: 'E-commerce Amerifan',
		description: 'xd',
		image_path: amerifan,
		url_deploy: 'https://e-commerce-amerifan.vercel.app/',
		url_repo: 'https://github.com/JhonItalo/E-commerce-Amerifan_React',
		tecnologies: ['React', 'Next', 'Typescript', 'Html', 'Css', 'Web peformance optimization'],
		responsive: 'Desktop | notebook',
	},
	{
		name: 'E-commerce SunStore',
		description:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
		image_path: sunstore,
		url_deploy: 'https://ecommerce-nine-beige.vercel.app/',
		url_repo: 'https://github.com/JhonItalo/Ecommerce-SunStore',
		tecnologies: ['react', 'Next', 'typescript', 'Web peformance optimization'],
		responsive: 'Desktop | notebook',
	},
	{
		name: 'Sistema universitário',
		description:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
		image_path: universidade,
		url_deploy: 'https://filmes-dun.vercel.app/',
		url_repo: 'https://github.com/JhonItalo/Filmes',
		tecnologies: ['react', 'typescript', 'Web peformance optimization'],
		responsive: 'Desktop | notebook',
	},
	{
		name: 'Netflix clone',
		description: 'xd',
		image_path: netflix,
		url_deploy: 'https://filmes-dun.vercel.app/',
		url_repo: 'https://github.com/JhonItalo/Filmes',
		tecnologies: ['react', 'typescript', 'Web peformance optimization'],
		responsive: 'Desktop | notebook',
	},
];
