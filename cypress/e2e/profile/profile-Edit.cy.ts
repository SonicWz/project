let profileId = '';

describe('Пользователь авторизуется и заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`/profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('Поле "имя" заполнилось корректно', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
    });
    it('Пользователь редактирует профиль', () => {
        const newFirstname = 'new firstname';
        const newLastname = 'new lastname';
        cy.updateProfile(newFirstname, newLastname);
        cy.getByTestId('ProfileCard.firstname').should(
            'have.value',
            newFirstname,
        );
        cy.getByTestId('ProfileCard.lastname').should(
            'have.value',
            newLastname,
        );
    });
});
