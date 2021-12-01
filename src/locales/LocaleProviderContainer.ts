import { createSelector } from "@reduxjs/toolkit";
import { connect } from "react-redux";

import { selectors } from "@src/redux";

import LocalesProvider from "./LocaleProvider";

const mapStateToProps = createSelector(selectors.lang.selectCode, (langCode) => ({ langCode }));

export default connect(mapStateToProps)(LocalesProvider);
