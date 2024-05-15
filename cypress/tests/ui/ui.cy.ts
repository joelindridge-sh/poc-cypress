/// <reference types="cypress" />

it("healthplan-ui", () => {
  // User visits Simplyhealth
  cy.visit("https://www.simplyhealth.co.uk/");
  cy.get("button[id='onetrust-accept-btn-handler']").click();
  cy.title().should("eq", "Simplyhealth | Health & Dental Plans to cover you");

  // User clicks Get a health plan
  cy.contains("Get a health plan").first().click();
  cy.title().should("eq", "1-2-3 Health Plan | Health cover from Simplyhealth");

  // User clicks Build your plan
  cy.contains("Build your plan").first().click();
  cy.title().should("eq", "1-2-3 Health Plan | Health cover from Simplyhealth");

  // User chooses health plan options
  cy.get("#lovedOnesButton").click();
  cy.contains("Add your family to your plan").should("be.visible");
  cy.get('[onclick="setPartnerTrue(event)"]').click();
  cy.get('[value="2"]').click();
  cy.get("#saveAndCloseButton").click();
  cy.get("#sh-coverage-text").should("have.text", "You, your partner and 2 children");
  cy.get('#sh-premiums > [value="4"]').click();
  cy.get("#sh-total-monthly").then(($el) => {
    cy.get('#sh-premiums button[value="4"]').then(($el2) => {
      expect($el.text()).to.equal($el2.text());
    });
  });
  cy.contains("Choose this plan").click();
  cy.title().should("eq", "About You - Simplyhealth - Path to Purchase");

  // User completes step 1: name
  cy.contains("Step 1 of 10").should("be.visible");
  cy.get("#AboutYou_firstName_TextInput").type("Me");
  cy.get("#AboutYou_lastName_TextInput").type("Name");
  cy.get("#AboutYou_Next_Button").click();

  // User completes step 2: dob
  cy.contains("Step 2 of 10").should("be.visible");
  cy.get("#DateOfBirth_Title_Text").should("have.text", "Hi Me, when were you born?");
  cy.get("#DateOfBirth_dateOfBirth_day_SelectInput").type("01");
  cy.get("#DateOfBirth_dateOfBirth_month_SelectInput").type("01");
  cy.get("#DateOfBirth_dateOfBirth_year_SelectInput").type("1990");
  cy.get("#DateOfBirth_Next_Button").click();
});
