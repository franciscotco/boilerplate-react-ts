// Vendors
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

// Styles
import { Section as Root, Link, Heading1, Content, Back } from './styles';

interface IProps {
	children: React.ReactNode,
	title: React.ReactNode,
	backUrl?: string
}

function Section ({ children, title, backUrl }: IProps) {

	return (
		<Root>
			{backUrl && (
				<Back>
					<Link
						as={NavLink}
						to={backUrl}
					>
						<FormattedMessage id="COMPONENTS.SECTION.BACK_URL.TITLE" />
					</Link>
				</Back>
			)}
			<Heading1>
				{title}
			</Heading1>
			<Content>
				{children}
			</Content>
		</Root>
	);

}

export default Section;
