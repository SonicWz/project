export const setRate = (starNumber: number, feedback: string) => {
    cy.getByTestId(`ArticleRating.Star${starNumber}`).click();
    if (feedback) {
        cy.getByTestId(`ArticleRating.Input`).type(feedback);
    }
    cy.getByTestId(`ArticleRating.SendButton`).click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(starNumber: number, feedback: string): Chainable<void>;
        }
    }
}
