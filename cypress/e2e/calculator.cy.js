describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('number buttons should update the running total', () => {
    cy.get('#number2').click();
    cy.get('#number4').click();
    cy.get('#number7').click();
    cy.get('.display').should('contain', '247')
  })


  it('operators should update the running total ', () => {
    cy.get('#number5').click();
    cy.get('#operator-multiply').click()
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '50')
  })

  it('chaining operators should also update the running total', () => {
    cy.get('#number5').click();
    cy.get('#operator-multiply').click()
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator_add').click()
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator-divide').click()
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '10')
  })

  it('output for large numbers should be displayed in a clear format', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click()
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click()
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click()
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click()
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click()
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '9.994001499800014e+23')
  })

  it('decimal numbers should not throw mis-calculations', () => {
    cy.get('#number0').click();
    cy.get('#decimal').click()
    cy.get('#number1').click();
    cy.get('#operator_add').click()
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '1.1')
  })
  it('negative numbers should not throw mis-calculations', () => {
    cy.get('#number1').click();
    cy.get('#operator-subtract').click()
    cy.get('#number7').click();
    cy.get('#operator_add').click()
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2')
  })
  it('negative numbers should display correctly', () => {
    cy.get('#number1').click();
    cy.get('#operator-subtract').click()
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-6')
  })

  it('dividing by 0 should display error', () => {
    cy.get('#number1').click();
    cy.get('#operator-divide').click()
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'error')
  })



})