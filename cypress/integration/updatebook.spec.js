describe('When the user wants to update a book', () =>{
    let bookname = "";
    let author = "";
    before(()=>{
        cy.visit("https://milosen-booksfront.herokuapp.com");
        

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
        cy.get('#name').click().wait(2).type(" nuevo nombre");
        cy.get('#author').click().wait(2).type(" nuevo author");
        cy.get('.ant-modal-footer > .ant-btn-primary').click();
        cy.visit("https://milosen-booksfront.herokuapp.com").wait(4);
    })
    it("Then the book should be updated in the list", ()=>{
        cy.contains(bookname+" nuevo nombre").should("exist");
    });

    after(()=>{
        cy.get(':nth-child(1) > :nth-child(4) > .ant-btn').click();
        cy.get('#name').click().clear().wait(2).click().wait(2).type(bookname);
        cy.get('#author').click().clear().wait(2).click().wait(2).type(author);
        cy.get('.ant-modal-footer > .ant-btn-primary').click();
        cy.visit("https://milosen-booksfront.herokuapp.com").wait(4);
    })
})

describe('When the user wants to update a book wihtout name', () =>{
    before(()=>{
        cy.visit("https://milosen-booksfront.herokuapp.com");
        cy.get(':nth-child(1) > :nth-child(4) > .ant-btn').click();
        cy.get('#name').click().clear();
    })
    it("Then the button can't be used", ()=>{
        cy.get('.ant-modal-footer > .ant-btn-primary').should("be.disabled");
    });

    after(()=>{
        cy.get('.ant-modal-footer > [nztype="default"]').click();
        cy.visit("https://milosen-booksfront.herokuapp.com");
    })
})

describe('When the user wants to update a book wihtout author', () =>{
    before(()=>{
        cy.visit("https://milosen-booksfront.herokuapp.com");
        cy.get(':nth-child(1) > :nth-child(4) > .ant-btn').click();
        cy.get('#author').click().wait(2).clear();
    })
    it("Then the button can't be used", ()=>{
        cy.get('.ant-modal-footer > .ant-btn-primary').should("be.disabled");
    });

    after(()=>{
        cy.get('.ant-modal-footer > [nztype="default"]').click();
        cy.visit("https://milosen-booksfront.herokuapp.com");
    })
})