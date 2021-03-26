export const visit = () => cy.visit('/')
export const title = () => cy.get('[data-cy=title]')
export const resetButton = () => cy.get('[data-cy=reset]')
export const searchInput = () => cy.get('[data-cy=search]')
export const list = () => cy.get('[data-cy=menu-list]')
export const emptyList = () => cy.get('[data-cy=empty-list]')
export const error = () => cy.get('[data-cy=error]')
export const item = (id = 1) => cy.get(`[data-cy=item-card-${id}]`)
export const getMenu = () => cy.route({ method: 'GET', url: '/api/v1/menu/index.json'}).as('getMenu')
export const getMenuError = () => cy.route({ method: 'GET', url: '/api/v1/menu/index.json', status: 500}).as('getMenuError')