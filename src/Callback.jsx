import React, { useEffect } from "react";
import { connect } from "react-redux";

export const Callback = (props) => {
  console.log("Callback", props);

  useEffect(() => {
    if (/access_toke|id_token|error/.test(props.location.hash)) {
      props.auth.handleAuthentication();
    } else {
      throw new Error("Invalid callback URL.");
    }
  }, []);
  return <div>Loading...</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Callback);
