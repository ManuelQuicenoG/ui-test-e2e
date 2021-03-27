describe('When the user wants to update a book', () =>{
    let bookname = "";
    let author = "";
    before(()=>{
        cy.visit("https://frontbooksmilo.herokuapp.com/");
        

        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2)')
          .invoke('text')  
          .then(text => {
                bookname = text+"";
        });
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(3)').
           invoke('text')  
           .then(text => {
             author = text+"";
        });
        cy.get(':nth-child(1) > :nth-child(4) > .ant-btn').click();
        cy.get('#name').click().type(" nuevo nombre");
        cy.get('#author').click().type(" nuevo author");
        cy.get('.ant-modal-footer > .ant-btn-primary').click();
        cy.visit("https://frontbooksmilo.herokuapp.com/");
    })
    it("Then the book should be updated in the list", ()=>{
        cy.contains(bookname).should("exist");
    });

    after(()=>{
        cy.get(':nth-child(1) > :nth-child(4) > .ant-btn').click();
        cy.get('#name').click().clear().click().type(bookname);
        cy.get('#author').click().clear().click().type(author);
        cy.get('.ant-modal-footer > .ant-btn-primary').click();
        cy.visit("https://frontbooksmilo.herokuapp.com/");
    })
})

describe('When the user wants to update a book wihtout name', () =>{
    before(()=>{
        cy.visit("https://frontbooksmilo.herokuapp.com/");
        cy.get(':nth-child(1) > :nth-child(4) > .ant-btn').click();
        cy.get('#name').click().clear();
    })
    it("Then the button can't be used", ()=>{
        cy.get('.ant-modal-footer > .ant-btn-primary').should("be.disabled");
    });

    after(()=>{
        cy.get('.ant-modal-footer > [nztype="default"]').click();
        cy.visit("https://frontbooksmilo.herokuapp.com/");
    })
})

describe('When the user wants to update a book wihtout author', () =>{
    before(()=>{
        cy.visit("https://frontbooksmilo.herokuapp.com/");
        cy.get(':nth-child(1) > :nth-child(4) > .ant-btn').click();
        cy.get('#author').click().clear();
    })
    it("Then the button can't be used", ()=>{
        cy.get('.ant-modal-footer > .ant-btn-primary').should("be.disabled");
    });

    after(()=>{
        cy.get('.ant-modal-footer > [nztype="default"]').click();
        cy.visit("https://frontbooksmilo.herokuapp.com/");
    })
})