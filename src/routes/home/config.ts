import Home from './index';

export default {
	id: 'home',
	name: 'home',
	path: '/home',
	exact: false,
	Component: Home,
	isEnable: () => true,
	order: 0
};
