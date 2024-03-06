/// <reference types="Cypress" />

import Interface from "./components/Interface";
import { getClassification } from "./components/Interface";

describe("Boundary Testing - getClassification", () => {
  it("underOn, underOff, underInterior", () => {
    const underOn = getClassification(18.5);
    const underOff = getClassification(18.6);
    const underInterior = getClassification(12);

    // Assert the result against a set value
    expect(underOn).to.equal("(Normal Weight)");
    expect(underOff).to.equal("(Normal Weight)");
    expect(underInterior).to.equal("(Underweight)");
  });

  it("normalOn, normalOff, normalInterior", () => {
    const normalOn = getClassification(25);
    const normalOff = getClassification(24.9);
    const normalInterior = getClassification(23);

    // Assert the result against a set value
    expect(normalOn).to.not.equal("(Normal Weight)");
    expect(normalOff).to.equal("(Normal Weight)");
    expect(normalInterior).to.equal("(Normal Weight)");
  });

  it("overOn, overOff, overInterior", () => {
    const overOn = getClassification(29.9);
    const overOff = getClassification(29.8);
    const overInterior = getClassification(35);

    // Assert the result against a set value
    expect(overOn).to.not.equal("(Overweight)");
    expect(overOff).to.equal("(Overweight)");
    expect(overInterior).to.equal("(Obese)");
  });
});

describe("calculateBMI testing", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Interface />);
  });

  it("a person that is 5 ft 3 inches and 125 lbs receives BMI of 22.7 and is Normal weight", () => {
    cy.mount(<Interface />);

    cy.get('input[id="InputFeet"]').type("5");
    cy.get('input[id="InputInch"]').type("3");
    cy.get('input[id="InputWeight"]').type("125");
    // Submit the form
    cy.get("button").click();

    cy.get('h1[id="BmiDisplay"]').should(
      "have.text",
      "Your BMI: 22.68 (Normal Weight)"
    );
  });

  it("a person that is 6 ft 3 inches and 125 lbs receives BMI of 16 and is Underweight", () => {
    cy.mount(<Interface />);

    cy.get('input[id="InputFeet"]').type("6");
    cy.get('input[id="InputInch"]').type("3");
    cy.get('input[id="InputWeight"]').type("125");
    // Submit the form
    cy.get("button").click();

    cy.get('h1[id="BmiDisplay"]').should(
      "have.text",
      "Your BMI: 16 (Underweight)"
    );
  });

  it("a person that is 6 ft 8 inches and 405 lbs receives BMI of 45.56 and is Obese", () => {
    cy.mount(<Interface />);

    cy.get('input[id="InputFeet"]').type("6");
    cy.get('input[id="InputInch"]').type("8");
    cy.get('input[id="InputWeight"]').type("405");
    // Submit the form
    cy.get("button").click();

    cy.get('h1[id="BmiDisplay"]').should(
      "have.text",
      "Your BMI: 45.56 (Obese)"
    );
  });

  it("a person that is 5 ft 8 inches and 170 lbs receives BMI of 26.47 and is Overweight", () => {
    cy.mount(<Interface />);

    cy.get('input[id="InputFeet"]').type("5");
    cy.get('input[id="InputInch"]').type("8");
    cy.get('input[id="InputWeight"]').type("170");
    // Submit the form
    cy.get("button").click();

    cy.get('h1[id="BmiDisplay"]').should(
      "have.text",
      "Your BMI: 26.47 (Overweight)"
    );
  });

  it("detects correct BMI Classifications", () => {
    cy.mount(<Interface />);

    cy.get('input[id="InputFeet"]').type("6");
  });
});
