describe("When the user want to see a book that exists in the list",()=>{
    let bookname = ""
    before(()=>{
        cy.visit("https://milosen-booksfront.herokuapp.com").wait(4);
        cy.get('.ant-select-arrow > .anticon > svg').click();
        cy.get('[title="50 / page"] > .ant-select-item-option-content').click();
        cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2)')
          .invoke('text')  
          .then(text => {
                bookname = text;
        });
    })

    it("then the book appears in the list", () => {
        cy.contains(bookname).should("exist");
    })
})

describe("When the user want to see a book that doesn't exist in the list",()=>{
    before(()=>{
        cy.visit("https://milosen-booksfront.herokuapp.com").wait(4);
        cy.get('.ant-select-arrow > .anticon > svg').click();
        cy.get('[title="50 / page"] > .ant-select-item-option-content').click();
    })

    it("then the book doesn't appear in the list", () => {
        cy.contains("irreal name that is imposible to appear in the list xdxdxd").should("not.exist");
    })
})