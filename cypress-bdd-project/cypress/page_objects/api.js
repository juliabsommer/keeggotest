class api {
    static searchProduct(product) {
      cy.request({
        method: 'GET',
        url: `https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=${product}`,
        failOnStatusCode: false
      }).as('searchProductResponse');
    }
  
    static updateProductImage() {
        cy.request({
          method: 'PUT',
          url: 'https://www.advantageonlineshopping.com/catalog/api/v1/product/image/{userId}/{source}/{color}',
          body: {n
          },
          failOnStatusCode: false
        }).as('updateProductImageResponse');
      }
    
      static verifyStatusCode(status) {
        cy.get('@updateProductImageResponse').its('status').should('eq', status);
      }
    
      static verifyNewImageId() {
        cy.get('@updateProductImageResponse').its('body').then((body) => {
          expect(body).to.have.property('imageId');
          expect(body.imageId).to.be.a('string');
        });
      }
    
      static verifyReasonAndSuccess() {
        cy.get('@updateProductImageResponse').its('body').then((body) => {
          expect(body).to.have.property('reason');
          expect(body).to.have.property('success');
          expect(body.success).to.be.a('boolean');
        });
      }
    }
    