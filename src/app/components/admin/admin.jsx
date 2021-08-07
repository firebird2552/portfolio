import React from "react";
import { connect } from "react-redux";
import { AdminNavigation } from "../navigation/AdminNavigation";
import { AdminContent } from "./AdminContent";

const Admin = (props) => {
  return (
    <div>
      <h1>Admin Content</h1>
      <AdminNavigation />
      <AdminContent />
    </div>
  );
};

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = {};

export const ConnectedAdmin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
