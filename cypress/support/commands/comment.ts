import { Comment } from "@/entities/Comment"

export const addComment = (text: string) => {
    cy.getByTestId('AddCommentForm.Input').type(text);
    cy.getByTestId('AddCommentForm.Button').click();
}

export const removeComment = (text: string) => {
     cy.request({
        method: 'GET',
        url: `http://localhost:8000/comments?text=${text}`,
        headers: { Authorization: 'asasf' },
    }).then(({ body }) => {
        cy.request({
            method: 'DELETE',
            url: `http://localhost:8000/comments/${body[0].id}`,
            headers: { Authorization: 'asasf' },
        })
    })
    
}

declare global {
    namespace Cypress {
        interface Chainable {
            addComment(text: string): Chainable<void>;
            removeComment(text: string): Chainable<Comment>;
        }
    }
}