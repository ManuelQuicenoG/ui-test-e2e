describe('When the user wants to delete a book', () =>{
    let bookname = "";
    let author = "";
    before(()=>{
        cy.visit("https://milosen-booksfront.herokuapp.com").wait(4);

        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2)')
          .invoke('text')  
          .then(text => {
                bookname = text;
        });
      cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(3)').
        invoke('text')  
        .then(text => {
             author = text;
        });
      cy.get(':nth-child(1) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click();
      cy.get('[nztype="default"]').click();
      cy.visit("https://milosen-booksfront.herokuapp.com").wait(4);
    })
    it("Then the book should be listed removed and doesn't appear into the list", ()=>{
        cy.contains(bookname).should("not.exist");
    });

    after(()=>{
        cy.visit("https://milosen-booksfront.herokuapp.com").wait(4);
        cy.get('.ant-btn-primary > .ng-star-inserted').click().wait(2);
        cy.get('#name').wait(2).click().type(bookname);
        cy.get('#author').wait(2).click().type(author);
        cy.get('.ant-modal-footer > .ant-btn-primary').click();
    })
})

describe('When the user wants to delete no one book', () =>{
    before(()=> {
        cy.visit("https://milosen-booksfront.herokuapp.com").wait(4);
    })
    it("Then the button delete doesn't be ready to use", ()=>{
        cy.get('[nztype="default"]').should("be.disabled");
    });
})