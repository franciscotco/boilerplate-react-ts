// Vendor
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

// Theme
import Base from 'routes/base';

// Components
import Spinner from './index';

/*
 *
 */
storiesOf('Components/Spinner', module)
	.addDecorator(withKnobs)
	.add('Demo', () => {

		const lang = select('Languages', ['en', 'fr'], 'en');

		return (
			<BrowserRouter>
				<Base lang_code={lang}>
					<Spinner />
				</Base>
			</BrowserRouter>
		);
	})
;
