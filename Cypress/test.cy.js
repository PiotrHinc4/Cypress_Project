describe('login with correct user name and password', () => {
  it('passes', () => {
    cy.visit('cypress/e2e/Strona/loginPage.html')

    cy.get('input[name="userName"]')
    .should('be.visible')
    .type('student')

    cy.get('input[name="password"]')
    .should('be.visible')
    .type('wsb1234')

    cy.get('input[type="button"]')
    .click()
    cy.visit('cypress/e2e/Strona/mainPage.html')
    cy.get('h1').contains('Zalogowano na stronę')
    .should('be.visible')

    cy.get('input[type="button"]')
    .click()
  })
})

describe('login with uncorrect user name and correct password', () => {
  it('passes', () => {
    cy.visit('cypress/e2e/Strona/loginPage.html')


    cy.get('input[name="userName"]')
    .should('be.visible')
    .type('student2')

    cy.get('input[name="password"]')
    .should('be.visible')
    .type('wsb1234')

    cy.get('input[type="button"]')
    .click()

    cy.get('div[id="feedBack"]').contains('Nazwa użytkownika lub hasło jest niepoprawne. Spróbuj ponownie')
    .should('be.visible')
  })
})

describe('login with correct user name and uncorrect password', () => {
  it('passes', () => {
    cy.visit('cypress/e2e/Strona/loginPage.html')


    cy.get('input[name="userName"]')
    .should('be.visible')
    .type('student')

    cy.get('input[name="password"]')
    .should('be.visible')
    .type('bsw1234')

    cy.get('input[type="button"]')
    .click()

    cy.get('div[id="feedBack"]').contains('Nazwa użytkownika lub hasło jest niepoprawne. Spróbuj ponownie')
    .should('be.visible')
  })
})

describe('login with uncorrect user name and password', () => {
  it('passes', () => {
    cy.visit('cypress/e2e/Strona/loginPage.html')


    cy.get('input[name="userName"]')
    .should('be.visible')
    .type('student2')

    cy.get('input[name="password"]')
    .should('be.visible')
    .type('bsw1234')

    cy.get('input[type="button"]')
    .click()

    cy.get('div[id="feedBack"]').contains('Nazwa użytkownika lub hasło jest niepoprawne. Spróbuj ponownie')
    .should('be.visible')
  })
})