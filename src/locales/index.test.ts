// Lang
import MESSAGES from './index';

describe('Locales', () => {

	test('key matching fr & en', () => {

		const { fr, en } = MESSAGES;

		Object.keys(fr).forEach(fr_key => {
			expect(!!en[fr_key]).toBe(true);
		});
	});
});
