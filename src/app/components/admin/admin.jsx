import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const admin = (props) => {
  return <div></div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export const ConnectedAdmin = connect(
  mapStateToProps,
  mapDispatchToProps
)(admin);
