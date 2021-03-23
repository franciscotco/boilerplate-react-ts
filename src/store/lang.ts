// Vendors
import { Dispatch } from 'redux';

// Data
import { supportedLanguages } from 'data';

// Types
import ILang from 'types/lang';

/*
 * Actions
 */
const SET_LANG = 'SET_LANG';

interface SetLangAction {
	type: typeof SET_LANG,
	payload: {
		lang_code: ILang
	}
}

type LangActionTypes = SetLangAction

function setLocal (lang_code: ILang) {
	return (dispatch: Dispatch<LangActionTypes>) => {

		return dispatch({
			type: SET_LANG,
			payload: {
				lang_code: supportedLanguages.includes(lang_code) ? lang_code : 'en'
			}
		});
	};
}

export const actions = {
	setLocal
};

/*
 * Reducer
 */
export interface ILangState {
	code: ILang
}

const initialState: ILangState = {
	code: 'en'
};

export function reducer (state = initialState, action: LangActionTypes) {
	switch (action.type) {
		case SET_LANG:
			return {
				code: action.payload.lang_code
			};
		default:
			return state;
	}
}
