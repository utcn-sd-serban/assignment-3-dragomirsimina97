describe("The question list",function()
{
/*beforeEach(function(){
        cy.request("http://localhost:8080/test/reseed").its("status").should("be.equal",200);
    });*/
     it("should show 4 questions",function()
{ cy.visit("/");

cy.get('[data-cy="Author"]').should("have.length",16);


})
it('should add a new question',function()
{
    cy.visit("/");
    cy.get('[data-cy="add"]').click();
    cy.get('[data-cy="author"]').type("Marcel");
    cy.get('[data-cy="title"]').type("Incercare");
    cy.get('[data-cy="text"]').type("Pleasee workk");
    cy.get('[data-cy="creationDate"]').type("19/9/19");
    cy.get('[data-cy="create"]').click();

    cy.visit("/");

cy.get('[data-cy="Author"]').should("have.length",17);
})


}



)