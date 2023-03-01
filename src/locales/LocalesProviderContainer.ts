import { createSelector } from "@reduxjs/toolkit";
import { connect } from "react-redux";

import { selectors } from "@src/redux/redux.selectors";

import LocalesProvider from "./LocalesProvider";

const mapStateToProps = createSelector(selectors.lang.selectCode, (langCode) => ({ langCode }));

export default connect(mapStateToProps)(LocalesProvider);
