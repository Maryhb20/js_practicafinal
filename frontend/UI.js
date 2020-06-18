import ProductService from './services/productService';
const productService = new ProductService();

import { format } from 'timeago.js';

class UI {

    async renderProducts() {
        const products = await productService.getProduct();
        console.log(products);
        const productsCardContainer = document.getElementById('products-cards');
        productsCardContainer.innerHTML = '';
        products.forEach(product => {
            const div = document.createElement('div');
            div.className = '';
            div.innerHTML = `
            <div class="card m-2">
                <div class="row">
                    <div class="col-md-4">
                       <img src="${product.imagePath}" class="img-fluid" />
                    </div> 
                    <div class="col-md-8">
                        <div class="card-block px-2">
                            <h4 class="card-title">${product.name}</h4>
                            <p class="card-title">${product.empresa}</p> 
                            <p class="card-title">${product.cantidad}</p> 
                            <a href="#" class="btn btn-danger delete" _id="${product._id}">X</a>                      
                        </div>            
                    </div>           
                </div> 
                <div class="card-footer">
                ${format(product.created_at)}
                </div>           
            </div>
            `;
            productsCardContainer.appendChild(div);
        });
    }

    async addNewProduct(product) {
        await productService.postProduct(product);
        this.clearProductForm();
        this.renderProducts();
    }

    clearProductForm() {
        document.getElementById('product-form').reset();
    }
    
    renderMessage(message, colorMessage, secondsToRemove) {
        const div = document.createElement('div');
        div.className = `alert alert-${colorMessage} message`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.col-md-4');
        const productForm = document.querySelector('#product-form');

        container.insertBefore(div, productForm)
        setTimeout(() => {
            document.querySelector('.message').remove();
        }, secondsToRemove);
    }

    async deleteProduct(productId) {
        await productService.deleteProduct(productId);
        this.renderProducts();
    }
}

export default UI;