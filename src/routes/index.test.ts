// Routes
import { getRoutes } from './routes';


describe('Routes', () => {

	test('order', () => {
		expect(getRoutes()?.[0].order).toBe(0);
	});
});

