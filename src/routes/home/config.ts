import Home from './index';

export default {
	id: 'home',
	name: 'home',
	path: '/home',
	exact: true,
	Component: Home,
	isEnable: () => true,
	order: 0
};
