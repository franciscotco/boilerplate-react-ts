// Locales
import en from 'locales/en';
import fr from 'locales/fr';

export interface IMessage {
	en: {
		[key: string]: string
	},
	fr: {
		[key: string]: string
	}
}

const MESSAGES: IMessage = {
	en: en,
	fr: fr
};

export default MESSAGES;
