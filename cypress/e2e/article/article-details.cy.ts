import { selectByTestId } from 'cypress/helpres/selectByTestId';

let currentArticleId = '';

describe('Пользователь авторизуется и заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login().then((data) => {});
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`articles/${article.id}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });

    it('И содержимое статьи успешно загружается', () => {
        cy.get(selectByTestId('ArticleDetailsInfo')).should('exist');
    });
    it('И видит список рекомендаций', () => {
        cy.get(selectByTestId('ArticleRecommendationList')).should('exist');
    });
    it('И оставляет комментарий', () => {
        cy.get(selectByTestId('ArticleDetailsInfo')).should('exist');
        cy.get(selectByTestId('AddCommentForm')).scrollIntoView();
        cy.addComment('testText');
        cy.get(selectByTestId('CommentCard.Content')).should('have.length', 1);
        cy.removeComment('testText');
    });
    it('И оценивает статью (со стабом на фикстурах)', () => {
        cy.intercept('GET', '**/articles/*', {
            fixture: 'article-details.json',
        });
        cy.getByTestId('ArticleDetailsInfo').should('exist');
        cy.getByTestId('ArticleRating.RatingCard').scrollIntoView();
        cy.setRate(5, 'feedback');
        cy.get(`[data-selected=true]`).should('have.length', 5);
    });
});
