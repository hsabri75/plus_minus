/// <reference types="cypress"/>

it('Open page',()=>{
    cy.visit('http://127.0.0.1:5500/dist/index.html')

    cy.get('#playbutton').should('exist')
    cy.contains('#guesstext').should('not.exist')
    cy.contains('#guessbutton').should('not.exist')
    cy.get('#guesslist').should('exist')
    cy.get('#guesslist').children().should('have.length', 0)
})

it('Make Guess',()=>{
    cy.visit('http://127.0.0.1:5500/dist/index.html')

    cy.get('#playbutton').click()    
    
    cy.get('#guesstext').should('exist')
    cy.get('#guessbutton').should('exist')
    cy.get('#guesslist').children().should('have.length', 0)

    cy.get('#guesstext').type('123')
    cy.get('#guessbutton').click()
    cy.get('#warningtext').contains('Guess should have 4 digits')

    cy.get('#guesstext').clear()
    cy.get('#guesstext').type('1233')
    cy.get('#guessbutton').click()
    cy.get('#warningtext').contains('Repeating digits not allowed')

    cy.get('#guesstext').clear()
    cy.get('#guesstext').type('1234')
    cy.get('#guessbutton').click()
    cy.get('#guesslist').children().should('have.length', 1) 
    
    cy.get('#playbutton').click()

    cy.get('#guesstext').should('exist')
    cy.get('#guessbutton').should('exist')
    cy.get('#guesslist').children().should('have.length', 0)  

})

it('Success',()=>{
    cy.visit('http://127.0.0.1:5500/dist/index.html')
    cy.get('#playbutton').click()

    cy.get('#guesstext').type('1234')
    cy.get('#guessbutton').click()    

    cy.get('#hiddentext').then(($value)=>{
        cy.get('#guesstext').clear()
        cy.get('#guesstext').type($value.text())
        cy.get('#guessbutton').click()
    })
})