// Configs
import HomeConfig from './home/config';

export interface IRoutes {
	id: string,
	name: string,
	path: string,
	exact: boolean,
	Component: () => JSX.Element,
	isEnable: () => boolean,
	order: number
}

const ROUTES: IRoutes[] = [
	HomeConfig
];

export function getRoutes (): IRoutes[] {
	return ROUTES
		.filter(({ isEnable }) => isEnable())
		.sort((a, b) => a.order - b.order);
}
