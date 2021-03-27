const bookName = "nuevo libro"
const authorname = "nuevo autor"
describe('When the user wants to register a book', () =>{
    before(()=>{
        cy.visit("https://frontbooksmilo.herokuapp.com/");

        cy.get('.ant-btn-primary > .ng-star-inserted').click();

        cy.get('#name').click().type(bookName);

        cy.get('#author').click().type(authorname);

        cy.get('.ant-modal-footer > .ant-btn-primary > .ng-star-inserted').click();

        cy.get('.ant-select-arrow > .anticon > svg').click();

        cy.get('[title="50 / page"] > .ant-select-item-option-content').click();
    });

    it("Then the book should be listed with the right name and author", ()=>{
        cy.contains(bookName).should("have.text", bookName);
    });
    
})

describe('When the user wants to register a book without author', () =>{
    before(()=>{
        cy.visit("https://frontbooksmilo.herokuapp.com/");

        cy.get('.ant-btn-primary > .ng-star-inserted').click();

        cy.get('#name').click().type(bookName + "fallo");

    });

    it("Then the button doesn't permit to press", ()=>{

        cy.get('.ant-modal-footer > .ant-btn-primary').should("be.disabled");
    });
    
})

describe('When the user wants to register a book without name', () =>{
    before(()=>{
        cy.visit("https://frontbooksmilo.herokuapp.com/");

        cy.get('.ant-btn-primary > .ng-star-inserted').click();
        
        cy.get('#name').click().clear();

        cy.get('#author').click().type(authorname + "fallo");

    });

    it("Then the button doesn't permit to press", ()=>{
        cy.get('.ant-modal-footer > .ant-btn-primary').should("be.disabled");
    });
    
})

describe('When the user wants to register a book without name and without author', () =>{
    before(()=>{
        cy.visit("https://frontbooksmilo.herokuapp.com/");

        cy.get('.ant-btn-primary > .ng-star-inserted').click();
        
        cy.get('#name').click().clear();


        cy.get('#author').click().clear();

    });

    it("Then the button doesn't permit to press", ()=>{
        cy.get('.ant-modal-footer > .ant-btn-primary').should("be.disabled");
    });
    
})