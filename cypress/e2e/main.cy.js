/// <reference types="cypress"/>

it('Open page',()=>{
    cy.visit('http://127.0.0.1:5500/dist/index.html')
    cy.screenshot("openscreen")
    cy.get('#playbutton').should('exist')
    cy.contains('#guesstext').should('not.exist')
    cy.contains('#guessbutton').should('not.exist')
    cy.get('#guesslist').should('exist')
    cy.get('#guesslist').children().should('have.length', 0)

})

it('New Game',()=>{
    cy.visit('http://127.0.0.1:5500/dist/index.html')

    cy.get('#playbutton').click()    
    
    cy.get('#guesstext').should('exist')
    cy.get('#guessbutton').should('exist')
    cy.get('#guesslist').children().should('have.length', 0)
    cy.wait(1000)
    cy.screenshot("newgame")
})
it('Make Guess 123',()=>{
    cy.visit('http://127.0.0.1:5500/dist/index.html')

    cy.get('#playbutton').click()  

    cy.get('#guesstext').type('123')
    cy.get('#guessbutton').click()
    cy.get('#warningtext').contains('Guess should have 4 digits')
    cy.wait(1000)
    cy.screenshot("guess_123")
})
it('Make Guess 1233',()=>{
    cy.visit('http://127.0.0.1:5500/dist/index.html')

    cy.get('#playbutton').click() 
    cy.get('#guesstext').type('1233')
    cy.get('#guessbutton').click()
    cy.get('#warningtext').contains('Repeating digits not allowed')
    cy.wait(1000)
    cy.screenshot("guess_1233")
})
it('Make Guess 1234',()=>{
    cy.visit('http://127.0.0.1:5500/dist/index.html')

    cy.get('#playbutton').click()
    cy.get('#guesstext').type('1234')
    cy.get('#guessbutton').click()
    cy.get('#guesslist').children().should('have.length', 1) 
    cy.wait(1000)
    cy.screenshot("guess_1234")
})
it('Restart',()=>{
    cy.visit('http://127.0.0.1:5500/dist/index.html')

    cy.get('#playbutton').click()
    cy.get('#guesstext').type('1234')
    cy.get('#guessbutton').click()
    cy.get('#playbutton').click()

    cy.get('#guesstext').should('exist')
    cy.get('#guessbutton').should('exist')
    cy.get('#guesslist').children().should('have.length', 0) 
    cy.wait(1000)
    cy.screenshot("restart") 

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
        cy.wait(1000)
        cy.screenshot("success") 
    })
})