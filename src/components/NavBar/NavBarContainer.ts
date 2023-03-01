import { createSelector } from "@reduxjs/toolkit";
import { connect } from "react-redux";

import { switchLang } from "@src/redux/lang";
import { selectors } from "@src/redux/redux.selectors";

import NavBar from "./NavBar";

const mapStateToProps = createSelector(selectors.lang.selectCode, (langCode) => ({ langCode }));

const mapDispatchToProps = {
  switchLang
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
