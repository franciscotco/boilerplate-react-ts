// Vendors
import { useSelector, useDispatch } from 'react-redux';

// Store
import { actions, ILangState } from 'store/lang';

function useLang () {

	const dispatch = useDispatch();
	const lang = useSelector(({ lang }: { lang: ILangState }) => lang);

	const setLang = (lang_code: string) => {
		dispatch(actions.setLocal(lang_code));
	};

	return {
		lang: lang,
		setLang: setLang
	};
}

export default useLang;
