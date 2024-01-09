import React, { Fragment } from "react";
import Header from "../../component/layout/header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header></Header>
      {children}
    </Fragment>
  );
};

export default Layout;
