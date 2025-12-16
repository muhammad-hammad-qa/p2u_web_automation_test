import urlData from "./../fixtures/urlData.json"

class BasePage {
  setUpHooks() {
    before(() => {
      cy.log('Test Suite Starting...')
    })

    beforeEach(() => {
      cy.clearCookies()
      cy.clearLocalStorage()
      cy.log('Test Starting...')
      cy.visit(urlData.visitUrl)
    })

    afterEach(() => {
      if (Cypress.currentTest.state === 'failed') {
        cy.screenshot()
      }
      cy.log('Test Finished....')
    })

    after(() => {
      cy.log('Test Suite Finished....')
    })
  }

  getElement(selector) {
    return cy.get(selector)
  }

  clickElement(selector) {
    this.getElement(selector).click();
  }

  typeIntoField(selector, text) {
    this.getElement(selector).type(text)
  }

  validateText(selector, text) {
    this.getElement(selector).should('contain.text ', text)
  }
}

export default BasePage;
