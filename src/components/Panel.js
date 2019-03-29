import React from "react";

const Panel = ({ background, children }) => (
  <div
    style={{ height: "100vh" }}
    className={`d-flex bg-${background} border-bottom border-width-2 border-color-gray-900`}
  >
    {children}
  </div>
);

export default Panel;
