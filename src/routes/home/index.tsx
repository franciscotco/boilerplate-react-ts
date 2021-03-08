// Vendors
import React from 'react';
import { useIntl } from 'react-intl';

// Components
import Section from 'components/section';

function Home () {

	const intl = useIntl();

	return (
		<Section
			title={intl.formatMessage({ id: 'ROUTES.HOME.TITLE' })}
		>
			{intl.formatMessage({ id: 'ROUTES.HOME.DESC' })}
		</Section>
	);

}

export default Home;
