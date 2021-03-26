import * as menu from '../page/menu'

describe('Testing menu', () => {
  describe('View', () => {
    it('Get the rigth translation in title', () => {
      menu.visit()
      menu.title().contains('Search')
    })
  
    it('Load items', () => {
      cy.server()
      menu.visit()
      menu.getMenu()
      cy.wait('@getMenu')
      menu.list().should('exist')
    })

    // it('Should show error message', () => {
    //   cy.server()
    //   menu.visit()
    //   menu.getMenuError()
    //   cy.wait('@getMenuError')
    //   menu.error().should('exist')
    // })
  })
  describe('Cart', () => {
    it('Should add item to cart if it is avaliable in stock', () => {
      cy.server()
      menu.visit()
      menu.getMenu()
      cy.wait('@getMenu')
  
      const cheeseBurguer = menu.item(2)
      cheeseBurguer.click()
      cheeseBurguer.should('have.class', '--selected')
      cheeseBurguer.contains('1 x')
      cheeseBurguer.click()
      cheeseBurguer.contains('1 x')
  
      const avoBurger = menu.item(3)
      avoBurger.click()
      avoBurger.click()
      cheeseBurguer.contains('2 x')
      
    })

    it('Should persist the item in cart', () => {
      cy.server()
      menu.visit()
      menu.getMenu()
      cy.wait('@getMenu')
  
      const cheeseBurguer = menu.item(2)
      cheeseBurguer.click()
      menu.visit()
      cy.wait('@getMenu')

      cheeseBurguer.should('have.class', '--selected')
    })
  })
  
  describe('Search', () => {
    it('Should find cheese burguer', () => {
      cy.server()
      menu.visit()
      menu.getMenu()
      cy.wait('@getMenu')
      menu.searchInput().type('cheese')
      cy.wait('@getMenu')
      menu.item(2).contains('Cheese Burger')
    })
  
    it('Should not find item', () => {
      cy.server()
      menu.visit()
      menu.getMenu()
      cy.wait('@getMenu')
      menu.searchInput().type('Item That does not exist')
      cy.wait('@getMenu')
      menu.emptyList().should('exist')
    })

  })
})
