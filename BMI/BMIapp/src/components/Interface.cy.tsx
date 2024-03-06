import React from "react";
import Interface from "./Interface";

describe("<Interface />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Interface />);
  });
});
