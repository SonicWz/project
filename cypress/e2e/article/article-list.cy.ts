import { selectByTestId } from "cypress/helpres/selectByTestId";

describe('Пользователь авторизуется и заходит на страницу статей', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit(`/articles/`);
        });
    })
    it('И статьи успешно загружаются', () => {
        cy.get(selectByTestId('ArticlesList')).should('exist');
        cy.get(selectByTestId('ArticlesListItem')).should('have.length.greaterThan', 3);
    });
    it('И статьи успешно загружаются (со стабом на фикстурах)', () => {
        cy.intercept('GET', '**/articles?*', {fixture: 'articles.json'});
        cy.get(selectByTestId('ArticlesList')).should('exist');
        cy.get(selectByTestId('ArticlesListItem')).should('have.length.greaterThan', 3);
    });
    it.skip('Скип теста', () => {
        cy.get(selectByTestId('ArticlesList____')).should('exist');

    });

})