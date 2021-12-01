import { createSelector } from "@reduxjs/toolkit";
import { connect } from "react-redux";

import { selectors } from "@src/redux";
import { switchLang } from "@src/redux/lang";

import NavBar from "./NavBar";

const mapStateToProps = createSelector(selectors.lang.selectCode, (langCode) => ({ langCode }));

const mapDispatchToProps = {
  switchLang
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
